-- ============================================
-- Shree Mangalmurti Krushi Seva Kendra
-- MySQL Database Schema
-- ============================================

-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS mangalmurti_db;
USE mangalmurti_db;

-- Step 2: Create Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,          -- bcrypt hashed password
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 3: Create Products table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url VARCHAR(500) DEFAULT '',
  size VARCHAR(50) DEFAULT '',
  stock INT DEFAULT 100,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 4: Create Orders table
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  customer_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  address TEXT NOT NULL,
  pincode VARCHAR(10) DEFAULT '',
  payment_method VARCHAR(50) DEFAULT 'cod',
  payment_proof VARCHAR(500) DEFAULT NULL,
  status ENUM('Processing', 'Shipped', 'Delivered') DEFAULT 'Processing',
  estimated_days INT DEFAULT 5,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Step 5: Create Order_Items table
CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Step 6: Create Feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  type ENUM('product', 'order', 'general') DEFAULT 'product',
  target_id INT DEFAULT NULL,              -- product_id or order_id depending on type
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================
-- Step 7: Insert Default Products (16 products)
-- ============================================
INSERT INTO products (name, description, price, category, image_url, stock) VALUES
('MAXXYIELD Booster', 'Premium yield booster by Micropvision Crop Care. Enhances crop health and increases agricultural productivity.', 650.00, 'Plant Growth Boosters', 'images/products/maxxyield.png', 100),
('Syngenta Ampligo', 'Fast-acting insecticide by Syngenta. Provides broad-spectrum control of pests for various crops.', 100.00, 'Insecticides', 'images/products/ampligo.png', 100),
('WEEDMAR SUPER', 'Dhanuka Weedmar Super Herbicide. Effective control of broad-leaf weeds in agricultural fields.', 450.00, 'Herbicides', 'images/products/weedmar_super.png', 100),
('Tata Tafgor', 'Tata Tafgor Insecticide. Contains Dimethoate 30% EC for effective pest management.', 350.00, 'Insecticides', 'images/products/tafgor.png', 100),
('GreenCARB Organic', 'Natural organic carbon enhancer. Improves soil structure and nutrient availability for plants.', 550.00, 'Organic', 'images/products/greencarb.png', 100),
('Roundup Herbicide', 'High-performance Glyphosate herbicide for total weed control. Trusted by farmers worldwide.', 550.00, 'Herbicides', 'images/products/roundup.png', 100),
('Tata Koranda', 'Tata Koranda (Chlorpyriphos 50% + Cypermethrin 5% EC) for effective control of various pests.', 450.00, 'Insecticides', 'images/products/koranda.png', 100),
('Syngenta Alika', 'Advanced insecticide for sucking pests. Fast knockdown and long-lasting protection.', 350.00, 'Insecticides', 'images/products/booster.jpg', 100),
('Calaris Xtra', 'Syngenta herbicide for corn and sugarcane. Superior control over broadleaf and grass weeds.', 950.00, 'Crop Protection', 'images/products/calaris.jpg', 100),
('Tarbez Fungicide', 'Tarbez systemic fungicide. Effective against a wide range of fungal diseases in crops.', 400.00, 'Fungicides', 'images/products/tarbez.jpg', 100),
('Godrej Mokin', 'Premium insecticide by Godrej for fruit and vegetable crops. Fast and effective control.', 597.00, 'Insecticides', 'images/products/tarbez.jpg', 100),
('Tata CONTAF', 'Tata Contaf Hexaconazole 5% EC. Systemic fungicide for control of powdery mildew and rust.', 380.00, 'Fungicides', 'images/products/contaf.jpg', 100),
('Gromor NanoDAP', 'Efficient fertilizer with nano-technology for better nutrient uptake and higher yields.', 600.00, 'Fertilizers', 'images/products/nanodap.jpg', 100),
('Glycel Herbicide', 'Glyphosate 41% S.L. systemic herbicide for non-selective weed control in plantations.', 520.00, 'Herbicides', 'images/products/glycel.jpg', 100),
('Hybrid Maize Seeds', 'High-yield maize variety with drought tolerance and disease resistance.', 420.00, 'Seeds', 'images/products/maize_seeds.jpg', 100),
('Organic Vermicompost', 'Premium organic manure for soil health. Natural and effective.', 280.00, 'Organic', 'images/products/vermicompost.jpg', 100);
-- Step 8: Create UPI Scanners table
CREATE TABLE IF NOT EXISTS upi_scanners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  upi_id VARCHAR(100) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
