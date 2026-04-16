const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// GET /api/products (Public)
router.get('/', productController.getAllProducts);

// POST /api/products (Admin only)
router.post('/', authenticateToken, isAdmin, productController.addProduct);

// PUT /api/products/:id (Admin only) - Update price or other fields
router.put('/:id', authenticateToken, isAdmin, productController.updateProduct);

// DELETE /api/products/:id (Admin only)
router.delete('/:id', authenticateToken, isAdmin, productController.deleteProduct);

module.exports = router;
