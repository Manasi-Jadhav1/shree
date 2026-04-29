const mysql = require('mysql2/promise');
require('dotenv').config(); // ✅ FIXED

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // ✅ IMPORTANT
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function runMigration() {
  try {
    console.log("Checking for 'size' column...");

    const [columns] = await pool.query(
      "SHOW COLUMNS FROM products LIKE 'size'"
    );

    if (columns.length === 0) {
      console.log("Adding 'size' column...");
      await pool.query(
        "ALTER TABLE products ADD COLUMN size VARCHAR(50) DEFAULT ''"
      );
      console.log("✅ Column added");
    } else {
      console.log("ℹ️ 'size' already exists");
    }

    console.log("Updating products...");

    await pool.query("UPDATE products SET size='700 ml', price=1000 WHERE name LIKE '%Calaris%'");
    await pool.query("UPDATE products SET size='500 ml', price=500 WHERE name LIKE '%Koranda%'");
    await pool.query("UPDATE products SET size='1 Liter', price=500 WHERE name LIKE '%Glycel%'");
    await pool.query("UPDATE products SET size='1 Liter', price=770 WHERE name LIKE '%CONTAF%'");
    await pool.query("UPDATE products SET size='500 ml', price=350 WHERE name LIKE '%Tarbez%'");

    console.log("✅ All products updated successfully!");
  } catch (error) {
    console.error("❌ Migration Error:", error.message);
  } finally {
    await pool.end(); // ✅ clean close
  }
}

runMigration();