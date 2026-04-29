const { pool } = require('../config/db');
const { sendEmail } = require('../utils/email');
const fs = require('fs');
const path = require('path');

// Place a new order
exports.placeOrder = async (req, res) => {
  const { customer_name, phone, address, pincode, payment_method, payment_proof_b64, cart_items, total } = req.body;
  const user_id = req.user.id;
  const user_email = req.user.email;

  try {
    // Calculate estimated delivery days
    let estimated_days = 6; // Default to 6-7 days
    if (pincode) {
      if (pincode.startsWith('416')) { // Kolhapur
        estimated_days = 3;
      } else if (pincode.startsWith('4')) { // Maharashtra
        estimated_days = 5;
      }
    }

    let payment_proof = null;
    if (payment_method === 'upi' && payment_proof_b64) {
      const matches = payment_proof_b64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const ext = matches[1].split('/')[1];
        const buffer = Buffer.from(matches[2], 'base64');
        const filename = `receipt_${Date.now()}_${Math.floor(Math.random() * 1000)}.${ext || 'jpg'}`;
        const receiptsDir = path.join(__dirname, '../../frontend/images/receipts');
        if (!fs.existsSync(receiptsDir)) {
          fs.mkdirSync(receiptsDir, { recursive: true });
        }
        fs.writeFileSync(path.join(receiptsDir, filename), buffer);
        payment_proof = `images/receipts/${filename}`;
      }
    }

    // Start transaction
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    let orderId;
    try {
      // 1. Insert into orders table
      const [orderResult] = await connection.query(
        `INSERT INTO orders 
        (user_id, total, customer_name, phone, address, pincode, payment_method, payment_proof, estimated_days) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [user_id, total, customer_name, phone, address, pincode, payment_method, payment_proof, estimated_days]
      );
      
      orderId = orderResult.insertId;

      // 2. Insert into order_items table
      for (const item of cart_items) {
        await connection.query(
          `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`,
          [orderId, item.id, item.qty, item.price]
        );
      }

      await connection.commit();
      connection.release();
    } catch (error) {
      await connection.rollback();
      connection.release();
      throw error;
    }

    // Build order items list for email
    const itemsHtml = cart_items.map(item => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name} ${item.size ? `(${item.size})` : ''}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.qty}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">₹${(item.price * item.qty).toLocaleString()}</td>
      </tr>
    `).join('');

    const orderTableHtml = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="padding: 8px; text-align: left; border-bottom: 2px solid #dee2e6;">Product</th>
            <th style="padding: 8px; text-align: center; border-bottom: 2px solid #dee2e6;">Qty</th>
            <th style="padding: 8px; text-align: right; border-bottom: 2px solid #dee2e6;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding: 8px; text-align: right; font-weight: bold;">Subtotal:</td>
            <td style="padding: 8px; text-align: right; font-weight: bold;">₹${total.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>
    `;

    // Send order confirmation email to the user (Async, non-blocking response)
    sendEmail(
      user_email,
      `🛍️ Order Confirmed! #${orderId} - Shree Mangalmurti Krushi Seva Kendra`,
      `<h2>Thank you for your order, ${customer_name}!</h2>
       <p>We've received your order <strong>#${orderId}</strong> and it's being processed.</p>
       <div style="background: #fdfdfd; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
         <h3 style="margin-top: 0; color: #2b5e2f;">Order Summary</h3>
         ${orderTableHtml}
         <p><strong>Total Paid/Payable:</strong> ₹${total.toLocaleString()}</p>
         <p><strong>Estimated Delivery:</strong> ${estimated_days} Days</p>
         <p><strong>Delivery Address:</strong><br>${address}, ${pincode}</p>
       </div>
       <p>We appreciate your business!</p>
       <br><p>Best Regards,<br><strong>Shree Mangalmurti Krushi Seva Kendra</strong></p>`
    ).catch(err => console.error("❌ Failed to send customer confirmation email:", err));

    // Send order notification email to the admin (Async, non-blocking response)
    sendEmail(
      process.env.ADMIN_EMAIL || 'admin@shreemangalmurti.com',
      `🔔 NEW ORDER RECEIVED: #${orderId} from ${customer_name}`,
      `<h2>New Order Alert!</h2>
       <p>A new order <strong>#${orderId}</strong> has been placed by <strong>${customer_name}</strong>.</p>
       <div style="background: #fdfdfd; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
         <h3 style="margin-top: 0; color: #1a2e1c;">Customer Details</h3>
         <p><strong>Name:</strong> ${customer_name}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Address:</strong> ${address}, ${pincode}</p>
         <p><strong>Payment Method:</strong> ${payment_method.toUpperCase()}</p>
       </div>
       <div style="margin-top: 20px;">
         <h3 style="color: #1a2e1c;">Order Items</h3>
         ${orderTableHtml}
       </div>
       <p style="margin-top: 20px;">Please check the admin panel to process this order.</p>`
    ).catch(err => console.error("❌ Failed to send admin notification email:", err));

    res.status(201).json({
      message: 'Order placed successfully!',
      orderId,
      estimated_days
    });

  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Server error placing order.' });
  }
};

// Get orders (User or Admin)
exports.getOrders = async (req, res) => {
  try {
    const is_admin = req.user.role === 'admin';
    const user_id = req.user.id;
    
    let query = `
      SELECT o.*, u.email as user_email
      FROM orders o
      JOIN users u ON o.user_id = u.id
    `;
    const params = [];

    // If not admin, only get user's own orders
    if (!is_admin) {
      query += ` WHERE o.user_id = ?`;
      params.push(user_id);
    }
    
    query += ` ORDER BY o.created_at DESC`;

    const [orders] = await pool.query(query, params);

    // Fetch items for each order
    for (let order of orders) {
      const [items] = await pool.query(`
        SELECT oi.*, p.name, p.image_url, p.size
        FROM order_items oi
        JOIN products p ON oi.product_id = p.id
        WHERE oi.order_id = ?
      `, [order.id]);
      
      order.items = items;
    }

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error fetching orders.' });
  }
};

// Update order status (Admin only)
exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['Processing', 'Shipped', 'Delivered'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    await pool.query('UPDATE orders SET status = ? WHERE id = ?', [status, id]);
    res.json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ message: 'Server error updating order.' });
  }
};

// Delete order (Admin only)
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    // Note: Foreign key constraints in schema.sql handle deletion from order_items
    await pool.query('DELETE FROM orders WHERE id = ?', [id]);
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ message: 'Server error deleting order.' });
  }
};
