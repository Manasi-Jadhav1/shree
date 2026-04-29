const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// All order routes require authentication
router.use(authenticateToken);

// POST /api/orders
router.post('/', orderController.placeOrder);

// GET /api/orders (Gets user's orders, or all orders if admin)
router.get('/', orderController.getOrders);

// PUT /api/orders/:id/status (Admin only)
router.put('/:id/status', isAdmin, orderController.updateOrderStatus);

// DELETE /api/orders/:id (Admin only)
router.delete('/:id', isAdmin, orderController.deleteOrder);

module.exports = router;
