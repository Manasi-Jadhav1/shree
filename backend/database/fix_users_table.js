const { pool } = require('../config/db');

async function fixUsersTable() {
  try {
    console.log('⏳ Checking users table columns...');
    
    // Check if columns already exist
    const [columns] = await pool.query('SHOW COLUMNS FROM users');
    const columnNames = columns.map(c => c.Field);
    
    if (!columnNames.includes('reset_otp')) {
      console.log('➕ Adding reset_otp column...');
      await pool.query('ALTER TABLE users ADD COLUMN reset_otp VARCHAR(10) DEFAULT NULL');
    }
    
    if (!columnNames.includes('otp_expiry')) {
      console.log('➕ Adding otp_expiry column...');
      await pool.query('ALTER TABLE users ADD COLUMN otp_expiry TIMESTAMP DEFAULT NULL');
    }
    
    console.log('✅ Users table is up to date!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error fixing users table:', error);
    process.exit(1);
  }
}

fixUsersTable();
