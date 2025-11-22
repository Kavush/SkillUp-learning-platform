const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware: Robust CORS
const allowedOrigins = [
  'https://skillup-learning-platform.netlify.app', // Production frontend
  'http://localhost:5173' // Local dev
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like Postman or curl)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Optional: explicit headers (extra failsafe)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigins.join(","));
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'SkillUp API is running perfectly!',
    timestamp: new Date().toISOString()
  });
});

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB error:', err.message));

// Import routes
console.log('🔄 Importing routes...');

const courses = require('./routes/courses');
const auth = require('./routes/auth');

console.log('✅ Courses type:', typeof courses);
console.log('✅ Auth type:', typeof auth);

// Mount routes
app.use('/api/courses', courses);
app.use('/api/auth', auth);

console.log('✅ All routes mounted successfully');

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎉 SERVER WORKING on port ${PORT}`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health`);
  console.log(`📚 Courses: http://localhost:${PORT}/api/courses`);
  console.log(`🔐 Auth Test: http://localhost:${PORT}/api/auth/test`);
  console.log(`👤 Register: POST http://localhost:${PORT}/api/auth/register`);
  console.log(`🔑 Login: POST http://localhost:${PORT}/api/auth/login`);
});

console.log('🚀 SkillUp Backend Started Successfully!');
