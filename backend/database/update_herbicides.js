const { pool } = require('../config/db');

async function update() {
  try {
    console.log('--- Updating Product Categories ---');
    const herbicides = ['Roundup Herbicide', 'Glycel Herbicide', 'WEEDMAR SUPER'];
    
    for (const name of herbicides) {
      console.log(`Moving ${name} to Herbicides...`);
      await pool.query('UPDATE products SET category = ? WHERE name = ?', ['Herbicides', name]);
    }
    
    console.log('✅ Categories successfully updated!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Update Error:', err);
    process.exit(1);
  }
}

update();
