const { pool } = require('../config/db');

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    // Don't return passwords
    const [users] = await pool.query('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error fetching users.' });
  }
};
