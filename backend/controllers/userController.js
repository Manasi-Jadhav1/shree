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

// Delete user (Admin only)
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  
  // Prevent admin from deleting themselves
  if (req.user.id == id) {
    return res.status(400).json({ message: 'You cannot delete your own admin account.' });
  }

  try {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server error deleting user.' });
  }
};
