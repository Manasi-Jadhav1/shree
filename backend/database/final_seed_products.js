const { pool } = require('../config/db');

const products = [
  { name: 'MAXXYIELD Booster', description: 'Premium yield booster by Micropvision Crop Care. Enhances crop health and increases agricultural productivity.', price: 650.00, category: 'Plant Growth Boosters', image_url: 'images/products/maxxyield.png' },
  { name: 'Syngenta Ampligo', description: 'Fast-acting insecticide by Syngenta. Provides broad-spectrum control of pests for various crops.', price: 100.00, category: 'Insecticides', image_url: 'images/products/ampligo.png' },
  { name: 'WEEDMAR SUPER', description: 'Dhanuka Weedmar Super Herbicide. Effective control of broad-leaf weeds in agricultural fields.', price: 450.00, category: 'Crop Protection', image_url: 'images/products/weedmar_super.png' },
  { name: 'Tata Tafgor', description: 'Tata Tafgor Insecticide. Contains Dimethoate 30% EC for effective pest management.', price: 350.00, category: 'Insecticides', image_url: 'images/products/tafgor.png' },
  { name: 'GreenCARB Organic', description: 'Natural organic carbon enhancer. Improves soil structure and nutrient availability for plants.', price: 550.00, category: 'Organic', image_url: 'images/products/greencarb.png' },
  { name: 'Roundup Herbicide', description: 'High-performance Glyphosate herbicide for total weed control. Trusted by farmers worldwide.', price: 550.00, category: 'Crop Protection', image_url: 'images/products/roundup.png' },
  { name: 'Syngenta Alika', description: 'Advanced insecticide for sucking pests. Fast knockdown and long-lasting protection.', price: 350.00, category: 'Insecticides', image_url: 'https://images.unsplash.com/photo-1595228283852-8a55e7ee7489?w=300' },
  { name: 'Calaris Xtra', description: 'Syngenta herbicide for corn and sugarcane. Superior control over broadleaf and grass weeds.', price: 950.00, category: 'Crop Protection', image_url: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=300' },
  { name: 'Tarbez Fungicide', description: 'Tarbez systemic fungicide. Effective against a wide range of fungal diseases in crops.', price: 400.00, category: 'Fungicides', image_url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300' },
  { name: 'Godrej Mokin', description: 'Premium insecticide by Godrej for fruit and vegetable crops. Fast and effective control.', price: 597.00, category: 'Insecticides', image_url: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=300' },
  { name: 'Tata CONTAF', description: 'Tata Contaf Hexaconazole 5% EC. Systemic fungicide for control of powdery mildew and rust.', price: 380.00, category: 'Fungicides', image_url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300' },
  { name: 'Gromor NanoDAP', description: 'Efficient fertilizer with nano-technology for better nutrient uptake and higher yields.', price: 600.00, category: 'Fertilizers', image_url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=300' },
  { name: 'Glycel Herbicide', description: 'Glyphosate 41% S.L. systemic herbicide for non-selective weed control in plantations.', price: 520.00, category: 'Crop Protection', image_url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300' },
  { name: 'Hybrid Maize Seeds', description: 'High-yield maize variety with drought tolerance and disease resistance.', price: 420.00, category: 'Seeds', image_url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300' },
  { name: 'Organic Vermicompost', description: 'Premium organic matter for soil fertility and healthy microbial activity.', price: 280.00, category: 'Organic', image_url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300' },
  { name: 'Seaweed Booster', description: 'Natural plant growth regulator for vigorous growth and stress tolerance.', price: 540.00, category: 'Plant Growth Boosters', image_url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=300' }
];

async function seed() {
  try {
    console.log('--- Reseeding Full Catalog (16 Items) ---');
    
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

    console.log('✅ Catalog successfully updated!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding Error:', error);
    process.exit(1);
  }
}

seed();
