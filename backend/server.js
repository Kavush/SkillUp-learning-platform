const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ===== Middleware =====
// Allow requests from frontend and local dev
const allowedOrigins = [
  'https://skillup-learning-platform.netlify.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow non-browser tools (e.g., Postman)
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('CORS not allowed for this origin'));
  },
  credentials: true
}));

app.use(express.json());

// ===== Health Check =====
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'SkillUp API is running perfectly!',
    timestamp: new Date().toISOString()
  });
});

// ===== MongoDB Connection =====
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('❌ MONGODB_URI is missing! Make sure it is set in Railway variables.');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// ===== Import Routes =====
const courses = require('./routes/courses');
const auth = require('./routes/auth');

app.use('/api/courses', courses);
app.use('/api/auth', auth);

console.log('✅ All routes mounted successfully');

// ===== Start Server =====
const PORT = process.env.PORT || 5000; // Railway sets process.env.PORT
app.listen(PORT, () => {
  console.log(`🎉 SERVER WORKING on port ${PORT}`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health`);
});
