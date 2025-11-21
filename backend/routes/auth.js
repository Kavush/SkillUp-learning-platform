const express = require('express');
const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Auth routes are working perfectly!',
    timestamp: new Date().toISOString()
  });
});

// Register user
router.post('/register', (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  
  res.json({
    success: true,
    message: 'User registered successfully',
    user: {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      joinedDate: new Date().toISOString()
    },
    token: 'jwt-token-' + Date.now()
  });
});

// Login user
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  res.json({
    success: true,
    message: 'Login successful',
    user: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: email
    },
    token: 'jwt-token-' + Date.now()
  });
});

// Get user profile
router.get('/me', (req, res) => {
  res.json({
    success: true,
    message: 'User profile',
    user: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    }
  });
});

module.exports = router;