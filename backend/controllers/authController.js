const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');
const { sendEmail } = require('../utils/email');

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if user already exists
    const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Email already registered!' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Default role to 'user' if not provided, validate if provided
    const userRole = role === 'admin' ? 'admin' : 'user';

    // Insert new user into database
    await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, userRole]
    );

    // Send welcome email
    await sendEmail(
      email,
      'Welcome to Shree Mangalmurti Krushi Seva Kendra!',
      `<h2>Welcome ${name}!</h2><p>Your account has been successfully created. You can now browse our premium farming solutions, manage your cart, and place orders.</p>`
    );

    res.status(201).json({ message: 'Registration successful! Please login.' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hardcoded Admin Check
    if (email === 'shreemksk@gmail.com' && password === 'shree@2005') {
      const payload = {
        id: 0,
        name: 'Admin',
        email: 'shreemksk@gmail.com',
        role: 'admin'
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
      return res.json({
        message: 'Admin login successful!',
        token,
        user: payload
      });
    }

    // Find user by email
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password!' });
    }

    const user = users[0];

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password!' });
    }

    // Generate JWT token
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      message: 'Login successful!',
      token,
      user: payload
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
};

// Forgot Password (Send OTP)
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(404).json({ message: 'No account found with that email address.' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in database with 15 mins expiry
    await pool.query(
      'UPDATE users SET reset_otp = ?, otp_expiry = DATE_ADD(NOW(), INTERVAL 15 MINUTE) WHERE email = ?',
      [otp, email]
    );

    // Send OTP via Email
    const emailSent = await sendEmail(
      email,
      'Password Reset OTP - Shree Mangalmurti Krushi Seva',
      `<h2>Password Reset Request</h2>
       <p>You requested to reset your password.</p>
       <p>Your OTP is: <strong style="font-size:24px; color:#2b7a2b;">${otp}</strong></p>
       <p>This OTP is valid for 15 minutes. If you did not request this, please ignore this email.</p>`
    );

    if (emailSent) {
      res.json({ message: 'OTP sent successfully to your email.' });
    } else {
      res.status(500).json({ message: 'Failed to send OTP email. Please make sure EMAIL_USER is setup.' });
    }
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Server error processing request.' });
  }
};

// Reset Password (Verify OTP)
exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ message: 'Email, OTP, and new password are required.' });
  }

  try {
    const [users] = await pool.query(
      'SELECT * FROM users WHERE email = ? AND reset_otp = ? AND otp_expiry > NOW()',
      [email, otp]
    );

    if (users.length === 0) {
      return res.status(400).json({ message: 'Invalid or expired OTP.' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password, clear OTP
    await pool.query(
      'UPDATE users SET password = ?, reset_otp = NULL, otp_expiry = NULL WHERE email = ?',
      [hashedPassword, email]
    );

    // Send confirmation
    await sendEmail(
      email,
      'Password Reset Successful',
      `<h2>Password Changed Successfully</h2>
       <p>Your password has been successfully reset. If you did not perform this action, please contact support immediately.</p>`
    );

    res.json({ message: 'Password has been reset successfully. You can now login.' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ message: 'Server error resetting password.' });
  }
};
