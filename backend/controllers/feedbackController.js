const { pool } = require('../config/db');

// Submit feedback
exports.submitFeedback = async (req, res) => {
  const { type, target_id, rating, comment } = req.body;
  const user_id = req.user.id;

  try {
    const [result] = await pool.query(
      'INSERT INTO feedback (user_id, type, target_id, rating, comment) VALUES (?, ?, ?, ?, ?)',
      [user_id, type, target_id, rating, comment]
    );

    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ message: 'Server error submitting feedback.' });
  }
};

// Get feedback for a specific product
exports.getProductFeedback = async (req, res) => {
  const { id } = req.params;

  try {
    const [feedback] = await pool.query(`
      SELECT f.*, u.name as user_name 
      FROM feedback f
      JOIN users u ON f.user_id = u.id
      WHERE f.type = 'product' AND f.target_id = ?
      ORDER BY f.created_at DESC
    `, [id]);

    res.json(feedback);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ message: 'Server error fetching feedback.' });
  }
};
