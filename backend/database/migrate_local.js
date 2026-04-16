const { pool } = require('../config/db');

const products = [
  { name: 'MAXXYIELD Booster', image_url: 'images/products/maxxyield.png' },
  { name: 'Syngenta Ampligo', image_url: 'images/products/ampligo.png' },
  { name: 'WEEDMAR SUPER', image_url: 'images/products/weedmar_super.png' },
  { name: 'Tata Tafgor', image_url: 'images/products/tafgor.png' },
  { name: 'GreenCARB Organic', image_url: 'images/products/greencarb.png' },
  { name: 'Roundup Herbicide', image_url: 'images/products/roundup.png' },
  { name: 'Tata Koranda', image_url: 'images/products/koranda.png' },
  { name: 'Syngenta Alika', image_url: 'images/products/booster.jpg' },
  { name: 'Calaris Xtra', image_url: 'images/products/calaris.jpg' },
  { name: 'Tarbez Fungicide', image_url: 'images/products/tarbez.jpg' },
  { name: 'Godrej Mokin', image_url: 'images/products/tarbez.jpg' },
  { name: 'Tata CONTAF', image_url: 'images/products/contaf.jpg' },
  { name: 'Gromor NanoDAP', image_url: 'images/products/nanodap.jpg' },
  { name: 'Glycel Herbicide', image_url: 'images/products/glycel.jpg' },
  { name: 'Hybrid Maize Seeds', image_url: 'images/products/maize_seeds.jpg' },
  { name: 'Organic Vermicompost', image_url: 'images/products/vermicompost.jpg' },
  { name: 'Seaweed Booster', image_url: 'images/products/booster.jpg' }
];

async function migrate() {
  try {
    console.log('--- Local Asset Migration Started ---');
    for (const p of products) {
      console.log(`Mapping ${p.name} to ${p.image_url}...`);
      await pool.query('UPDATE products SET image_url = ? WHERE name = ?', [p.image_url, p.name]);
    }
    console.log('✅ All products successfully migrated to local assets!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Migration Error:', err);
    process.exit(1);
  }
}

migrate();
