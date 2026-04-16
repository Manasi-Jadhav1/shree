const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { authenticateToken } = require('../middleware/auth');

// POST /api/feedback (Logged in users only)
router.post('/', authenticateToken, feedbackController.submitFeedback);

// GET /api/feedback/product/:id (Public)
router.get('/product/:id', feedbackController.getProductFeedback);

module.exports = router;
