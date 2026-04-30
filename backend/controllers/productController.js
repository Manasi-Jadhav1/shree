const { pool } = require('../config/db');
const fs = require('fs');
const path = require('path');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const { category, search } = req.query;
    
    let query = 'SELECT * FROM products';
    const params = [];

    // Basic filtering conditions
    const conditions = [];

    if (category && category !== 'all') {
      conditions.push('category = ?');
      params.push(category);
    }

    if (search) {
      conditions.push('(name LIKE ? OR description LIKE ?)');
      params.push(`%${search}%`, `%${search}%`);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    const [products] = await pool.query(query, params);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error fetching products.' });
  }
};

// Add a new product (Admin only)
exports.addProduct = async (req, res) => {
  const { name, description, price, category, image_url, size, stock } = req.body;

  try {
    const defaultImage = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80';
    let final_image_url = image_url || defaultImage;

    // Handle base64 image upload by saving directly to the database
    // This prevents image loss on ephemeral file systems (like Render, Vercel)
    if (image_url && image_url.startsWith('data:image')) {
      final_image_url = image_url;
    }
    
    const [result] = await pool.query(
      'INSERT INTO products (name, description, price, category, image_url, size, stock) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, description, price, category, final_image_url, size || '', stock || 100]
    );

    res.status(201).json({ 
      message: 'Product added successfully!',
      productId: result.insertId
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error adding product.' });
  }
};

// Delete a product (Admin only)
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM products WHERE id = ?', [id]);
    res.json({ message: 'Product deleted successfully!' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error deleting product.' });
  }
};

// Update a product (price, etc.) - Admin only
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { price, name, description, category, image_url, size } = req.body;

  try {
    const fields = [];
    const params = [];

    let final_image_url = image_url;
    if (image_url && image_url.startsWith('data:image')) {
      final_image_url = image_url;
    }

    if (price !== undefined)       { fields.push('price = ?');       params.push(price); }
    if (name !== undefined)        { fields.push('name = ?');        params.push(name); }
    if (description !== undefined) { fields.push('description = ?'); params.push(description); }
    if (category !== undefined)    { fields.push('category = ?');    params.push(category); }
    if (image_url !== undefined)   { fields.push('image_url = ?');   params.push(final_image_url); }
    if (size !== undefined)        { fields.push('size = ?');        params.push(size); }

    if (fields.length === 0) {
      return res.status(400).json({ message: 'No fields to update.' });
    }

    params.push(id);
    await pool.query(`UPDATE products SET ${fields.join(', ')} WHERE id = ?`, params);
    res.json({ message: 'Product updated successfully!' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error updating product.' });
  }
};
