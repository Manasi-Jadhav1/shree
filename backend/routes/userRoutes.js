const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// GET /api/users (Admin only)
router.get('/', authenticateToken, isAdmin, userController.getAllUsers);

// DELETE /api/users/:id (Admin only)
router.delete('/:id', authenticateToken, isAdmin, userController.deleteUser);

module.exports = router;
