const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Admin Login using environment variables
router.post('/login', (req, res) => {
  const { username, password } = req.body || {};

  const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  if (username === expectedUsername && password === expectedPassword) {
    const token = jwt.sign(
      { username, role: 'admin' },
      process.env.JWT_SECRET || 'accredian_admin_secret_key_2026',
      { expiresIn: '24h' }
    );

    return res.json({
      success: true,
      message: 'Admin authentication successful.',
      token,
      admin: { username }
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
});

// Middleware to verify Admin JWT token
const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied. Token missing.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'accredian_admin_secret_key_2026');
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired token.' });
  }
};

module.exports = { router, verifyAdminToken };
