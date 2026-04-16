const { pool } = require('../config/db');

// Get all UPI scanners
exports.getAllScanners = async (req, res) => {
  try {
    const [scanners] = await pool.query('SELECT * FROM upi_scanners ORDER BY created_at DESC');
    res.json(scanners);
  } catch (error) {
    console.error('Error fetching scanners:', error);
    res.status(500).json({ message: 'Server error fetching UPI scanners.' });
  }
};

// Add a new UPI scanner
exports.addScanner = async (req, res) => {
  const { name, upi_id, image_url } = req.body;

  if (!name || !upi_id || !image_url) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO upi_scanners (name, upi_id, image_url) VALUES (?, ?, ?)',
      [name, upi_id, image_url]
    );

    res.status(201).json({
      message: 'UPI Scanner added successfully!',
      scannerId: result.insertId
    });
  } catch (error) {
    console.error('Error adding scanner:', error);
    res.status(500).json({ message: 'Server error adding UPI scanner.' });
  }
};

// Delete a UPI scanner
exports.deleteScanner = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM upi_scanners WHERE id = ?', [id]);
    res.json({ message: 'UPI Scanner removed successfully!' });
  } catch (error) {
    console.error('Error deleting scanner:', error);
    res.status(500).json({ message: 'Server error deleting UPI scanner.' });
  }
};
