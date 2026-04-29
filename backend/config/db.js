// ============================================
// config/db.js - MySQL Database Connection
// Uses mysql2/promise for async/await support
// ============================================

const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Create a connection pool (reuses connections efficiently)
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mangalmurti_db',
  waitForConnections: true,   // Wait if all connections are busy
  connectionLimit: 10,        // Maximum 10 simultaneous connections
  queueLimit: 0               // Unlimited queue
});

// Test the database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL Database connected successfully!');
    connection.release(); // Release back to pool
  } catch (error) {
    console.error('❌ MySQL Connection Error:', error.message);
    console.error('   Make sure MySQL is running and credentials in .env are correct.');
    process.exit(1); // Stop server if DB connection fails
  }
}

module.exports = { pool, testConnection };
