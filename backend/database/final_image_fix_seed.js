const { pool } = require('../config/db');

const products = [
  { name: 'MAXXYIELD Booster', description: 'Premium yield booster by Micropvision Crop Care. Enhances crop health and increases agricultural productivity.', price: 650.00, category: 'Plant Growth Boosters', image_url: 'images/products/maxxyield.png' },
  { name: 'Syngenta Ampligo', description: 'Fast-acting insecticide by Syngenta. Provides broad-spectrum control of pests for various crops.', price: 100.00, category: 'Insecticides', image_url: 'images/products/ampligo.png' },
  { name: 'WEEDMAR SUPER', description: 'Dhanuka Weedmar Super Herbicide. Effective control of broad-leaf weeds in agricultural fields.', price: 450.00, category: 'Crop Protection', image_url: 'images/products/weedmar_super.png' },
  { name: 'Tata Tafgor', description: 'Tata Tafgor Insecticide. Contains Dimethoate 30% EC for effective pest management.', price: 350.00, category: 'Insecticides', image_url: 'images/products/tafgor.png' },
  { name: 'GreenCARB Organic', description: 'Natural organic carbon enhancer. Improves soil structure and nutrient availability for plants.', price: 550.00, category: 'Organic', image_url: 'images/products/greencarb.png' },
  { name: 'Roundup Herbicide', description: 'High-performance Glyphosate herbicide for total weed control. Trusted by farmers worldwide.', price: 550.00, category: 'Crop Protection', image_url: 'images/products/roundup.png' },
  { name: 'Tata Koranda', description: 'Tata Koranda (Chlorpyriphos 50% + Cypermethrin 5% EC) for effective control of various pests.', price: 450.00, category: 'Insecticides', image_url: 'images/products/koranda.png' },
  { name: 'Syngenta Alika', description: 'Advanced insecticide for sucking pests. Fast knockdown and long-lasting protection.', price: 350.00, category: 'Insecticides', image_url: 'https://www.agriplexindia.com/cdn/shop/products/Alika_500ml_800x.jpg' },
  { name: 'Calaris Xtra', description: 'Syngenta herbicide for corn and sugarcane. Superior control over broadleaf and grass weeds.', price: 950.00, category: 'Crop Protection', image_url: 'https://kisanshop.in/images/v2/products/original/syngenta_calaris_xtra.jpg' },
  { name: 'Tarbez Fungicide', description: 'Tarbez systemic fungicide. Effective against a wide range of fungal diseases in crops.', price: 400.00, category: 'Fungicides', image_url: 'https://www.agriplexindia.com/cdn/shop/products/ContafPlus_500ml_800x.jpg' },
  { name: 'Godrej Mokin', description: 'Premium insecticide by Godrej for fruit and vegetable crops. Fast and effective control.', price: 597.00, category: 'Insecticides', image_url: 'https://www.bighaat.com/cdn/shop/products/Mokin_1L_800x.jpg' },
  { name: 'Tata CONTAF', description: 'Tata Contaf Hexaconazole 5% EC. Systemic fungicide for control of powdery mildew and rust.', price: 380.00, category: 'Fungicides', image_url: 'https://www.agriplexindia.com/cdn/shop/products/Contaf_500ml_800x.jpg' },
  { name: 'Gromor NanoDAP', description: 'Efficient fertilizer with nano-technology for better nutrient uptake and higher yields.', price: 600.00, category: 'Fertilizers', image_url: 'https://www.bighaat.com/cdn/shop/products/NanoDAP_1L_800x.jpg' },
  { name: 'Glycel Herbicide', description: 'Glyphosate 41% S.L. systemic herbicide for non-selective weed control in plantations.', price: 520.00, category: 'Crop Protection', image_url: 'https://kisanshop.in/images/v2/products/original/glycel_glyphosate.jpg' },
  { name: 'Hybrid Maize Seeds', description: 'High-yield maize variety with drought tolerance and disease resistance.', price: 420.00, category: 'Seeds', image_url: 'https://www.bighaat.com/cdn/shop/products/Maize_Seeds_800x.jpg' },
  { name: 'Organic Vermicompost', description: 'Premium organic matter for soil fertility and healthy microbial activity.', price: 280.00, category: 'Organic', image_url: 'https://www.bighaat.com/cdn/shop/products/Vermicompost_5kg_800x.jpg' }
];

async function seed() {
  try {
    console.log('--- Reseeding Database with Image Fixes ---');
    
    // Clear and re-insert for consistency
    await pool.query('SET FOREIGN_KEY_CHECKS = 0');
    await pool.query('TRUNCATE TABLE products');
    await pool.query('SET FOREIGN_KEY_CHECKS = 1');

    for (const p of products) {
      console.log(`Adding: ${p.name}`);
      await pool.query(
        'INSERT INTO products (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)',
        [p.name, p.description, p.price, p.category, p.image_url]
      );
    }

    console.log('✅ Database images successfully corrected!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding Error:', error);
    process.exit(1);
  }
}

seed();
