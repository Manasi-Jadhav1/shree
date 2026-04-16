// ============================================
// middleware/auth.js - JWT Authentication Middleware
// Protects routes that require login or admin access
// ============================================

const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware: Verify JWT Token
// Usage: Add this to any route that requires the user to be logged in
function authenticateToken(req, res, next) {
  // Get token from the Authorization header
  // Format: "Bearer <token>"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // If no token is provided, return 401 (Unauthorized)
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Please login first.' });
  }

  try {
    // Verify the token using our secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user info to the request object
    req.user = decoded;
    next(); // Continue to the next middleware/route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token. Please login again.' });
  }
}

// Middleware: Check if user is Admin
// Usage: Add AFTER authenticateToken to restrict route to admins only
function isAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
  }
  next();
}

module.exports = { authenticateToken, isAdmin };
