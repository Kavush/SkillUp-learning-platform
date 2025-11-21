const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
origin: "https://skillup-learning-platform.netlify.app"
}));
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
  console.log(`🎉 SERVER WORKING on http://localhost:${PORT}`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health`);
  console.log(`📚 Courses: http://localhost:${PORT}/api/courses`);
  console.log(`🔐 Auth Test: http://localhost:${PORT}/api/auth/test`);
  console.log(`👤 Register: POST http://localhost:${PORT}/api/auth/register`);
  console.log(`🔑 Login: POST http://localhost:${PORT}/api/auth/login`);
});

console.log('🚀 SkillUp Backend Started Successfully!');