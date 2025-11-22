const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ===== CORS =====
const allowedOrigins = [
  'https://skillup-learning-platform.netlify.app', // Production frontend
  'http://localhost:5173' // Local dev
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1){
      return callback(new Error('CORS not allowed for this origin'), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// ===== Health check =====
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'SkillUp API is running perfectly!',
    timestamp: new Date().toISOString()
  });
});

// ===== Database connection =====
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB error:', err.message));

// ===== Import routes =====
const courses = require('./routes/courses');
const auth = require('./routes/auth');

app.use('/api/courses', courses);
app.use('/api/auth', auth);

// ===== Start server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎉 SERVER WORKING on port ${PORT}`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health`);
});

console.log('🚀 SkillUp Backend Started Successfully!');
