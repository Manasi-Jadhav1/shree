const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

async function run() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Manasi@2005',
    database: process.env.DB_NAME || 'mangalmurti_db'
  });

  try {
    await pool.query("UPDATE products SET image_url = 'images/products/alika.jpg' WHERE id = 8");
    await pool.query("UPDATE products SET image_url = 'images/products/mokin.jpg' WHERE id = 11");
    console.log('DB Updated Successfully');
    process.exit(0);
  } catch (err) {
    console.error('Update Failed:', err);
    process.exit(1);
  }
}

run();
