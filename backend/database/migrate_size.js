const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Manasi@2005',
  database: process.env.DB_NAME || 'mangalmurti_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function runMigration() {
  try {
    console.log("Checking for 'size' column...");
    const [columns] = await pool.query("SHOW COLUMNS FROM products LIKE 'size'");
    
    if (columns.length === 0) {
      console.log("Adding 'size' column to products table...");
      await pool.query("ALTER TABLE products ADD COLUMN size VARCHAR(50) DEFAULT ''");
      console.log("Column added successfully!");
    } else {
      console.log("'size' column already exists.");
    }

    console.log("Updating designated products with accurate market prices and sizes...");
    
    // Update Calaris Xtra
    await pool.query("UPDATE products SET size='700 ml', price=1000.00, category='Herbicides' WHERE name LIKE '%Calaris%'");
    
    // Update Koranda
    await pool.query("UPDATE products SET size='500 ml', price=500.00 WHERE name LIKE '%Koranda%'");
    
    // Update Glycel
    await pool.query("UPDATE products SET size='1 Liter', price=500.00 WHERE name LIKE '%Glycel%'");
    
    // Update Contaf
    await pool.query("UPDATE products SET size='1 Liter', price=770.00 WHERE name LIKE '%CONTAF%'");
    
    // Update Tarbez
    await pool.query("UPDATE products SET size='500 ml', price=350.00 WHERE name LIKE '%Tarbez%'");

    console.log("All products updated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Migration Error:", error);
    process.exit(1);
  }
}

runMigration();
