const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // ✅ IMPORTANT
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    await pool.query("UPDATE products SET image_url = 'images/products/alika.jpg' WHERE id = 8");
    await pool.query("UPDATE products SET image_url = 'images/products/mokin.jpg' WHERE id = 11");

    console.log('✅ DB Updated Successfully');
  } catch (err) {
    console.error('❌ Update Failed:', err.message);
  } finally {
    await pool.end(); // ✅ clean close
  }
}

run();