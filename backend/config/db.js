const mysql = require('mysql2/promise');
require('dotenv').config();

let pool;

if (process.env.MYSQL_URL) {
  // ✅ Railway connection string (recommended)
  pool = mysql.createPool(process.env.MYSQL_URL);
} else {
  // fallback (manual config)
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
  });
}

// Test DB connection
async function testConnection() {
  try {
    const conn = await pool.getConnection();
    console.log("✅ MySQL Connected");
    conn.release();
  } catch (err) {
    console.error("❌ DB Error:", err.message);
    // ❌ DO NOT STOP SERVER
  }
}

module.exports = { pool, testConnection };