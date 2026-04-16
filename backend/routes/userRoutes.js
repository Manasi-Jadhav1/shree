const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// GET /api/users (Admin only)
router.get('/', authenticateToken, isAdmin, userController.getAllUsers);

module.exports = router;
