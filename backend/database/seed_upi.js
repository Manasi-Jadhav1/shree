const { pool } = require('../config/db');

async function seedUPI() {
  try {
    const [existing] = await pool.query('SELECT * FROM upi_scanners');
    if (existing.length === 0) {
      console.log('🌱 Seeding default UPI scanner...');
      await pool.query(
        'INSERT INTO upi_scanners (name, upi_id, image_url) VALUES (?, ?, ?)',
        ['Shop Owner', 'shree@upi', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg']
      );
      console.log('✅ Default UPI scanner seeded!');
    } else {
      console.log('ℹ️ UPI scanners already exist.');
    }
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding UPI scanner:', error);
    process.exit(1);
  }
}

seedUPI();
