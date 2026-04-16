const { pool } = require('./config/db');

async function createTable() {
  try {
    console.log('⏳ Creating upi_scanners table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS upi_scanners (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        upi_id VARCHAR(100) NOT NULL,
        image_url VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ table "upi_scanners" created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating table:', error);
    process.exit(1);
  }
}

createTable();
