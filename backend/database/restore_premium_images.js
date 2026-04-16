const { pool } = require('../config/db');

const products = [
  { name: 'MAXXYIELD Booster', image_url: 'images/products/maxxyield.png' },
  { name: 'Syngenta Ampligo', image_url: 'images/products/ampligo.png' },
  { name: 'WEEDMAR SUPER', image_url: 'images/products/weedmar_super.png' },
  { name: 'Tata Tafgor', image_url: 'images/products/tafgor.png' },
  { name: 'GreenCARB Organic', image_url: 'images/products/greencarb.png' },
  { name: 'Roundup Herbicide', image_url: 'images/products/roundup.png' },
  { name: 'Tata Koranda', image_url: 'images/products/koranda.png' },
  { name: 'Syngenta Alika', image_url: 'https://images.unsplash.com/photo-1595228283852-8a55e7ee7489?w=300' },
  { name: 'Calaris Xtra', image_url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300' },
  { name: 'Tarbez Fungicide', image_url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300' },
  { name: 'Godrej Mokin', image_url: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=300' },
  { name: 'Tata CONTAF', image_url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300' },
  { name: 'Gromor NanoDAP', image_url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=300' },
  { name: 'Glycel Herbicide', image_url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300' },
  { name: 'Hybrid Maize Seeds', image_url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300' },
  { name: 'Organic Vermicompost', image_url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300' }
];

async function update() {
  try {
    console.log('--- Restoring Unique Premium Images ---');
    for (const p of products) {
      console.log(`Updating ${p.name}...`);
      await pool.query('UPDATE products SET image_url = ? WHERE name = ?', [p.image_url, p.name]);
    }
    console.log('✅ All 16 product visuals restored and unique!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Update Error:', error);
    process.exit(1);
  }
}

update();
