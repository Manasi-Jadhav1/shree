const { pool } = require('../config/db');

const products = [
  { name: 'MAXXYIELD Booster', image_url: 'images/products/maxxyield.png', price: 650.00 },
  { name: 'Syngenta Ampligo', image_url: 'images/products/ampligo.png', price: 100.00 },
  { name: 'WEEDMAR SUPER', image_url: 'images/products/weedmar_super.png', price: 450.00 },
  { name: 'Tata Tafgor', image_url: 'images/products/tafgor.png', price: 350.00 },
  { name: 'GreenCARB Organic', image_url: 'images/products/greencarb.png', price: 550.00 },
  { name: 'Roundup Herbicide', image_url: 'images/products/roundup.png', price: 550.00 },
  { name: 'Tata Koranda', image_url: 'images/products/koranda.png', price: 450.00 },
  { name: 'Syngenta Alika', image_url: 'https://images.unsplash.com/photo-1595228283852-8a55e7ee7489?w=600', price: 350.00 },
  { name: 'Calaris Xtra', image_url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600', price: 950.00 },
  { name: 'Tarbez Fungicide', image_url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600', price: 400.00 },
  { name: 'Godrej Mokin', image_url: 'https://images.unsplash.com/photo-1581578731523-288219ef895e?w=600', price: 597.00 },
  { name: 'Tata CONTAF', image_url: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600', price: 380.00 },
  { name: 'Gromor NanoDAP', image_url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=600', price: 600.00 },
  { name: 'Glycel Herbicide', image_url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600', price: 520.00 },
  { name: 'Hybrid Maize Seeds', image_url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600', price: 420.00 },
  { name: 'Organic Vermicompost', image_url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600', price: 280.00 }
];

async function sync() {
  try {
    console.log('--- Ultimate Visual Sync Started ---');
    for (const p of products) {
      console.log(`Syncing ${p.name}...`);
      await pool.query('UPDATE products SET image_url = ?, price = ? WHERE name = ?', [p.image_url, p.price, p.name]);
    }
    console.log('✅ Visual synchronization complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Sync Error:', err);
    process.exit(1);
  }
}

sync();
