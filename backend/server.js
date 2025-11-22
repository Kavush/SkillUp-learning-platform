const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ===== Middleware: CORS =====
const allowedOrigins = [
  'https://skillup-learning-platform.netlify.app', // Production frontend
  'http://localhost:5173' // Local dev
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin like mobile apps or curl
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


// Parse JSON
app.use(express.json());

// ===== Health Check =====
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'SkillUp API is running!',
    timestamp: new Date().toISOString(),
  });
});

// ===== MongoDB Connection =====
const mongoDBUri = process.env.MONGODB_URI; 
mongoose.connect(mongoDBUri)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB error:', err.message));

// ===== Routes =====
const courses = require('./routes/courses');
const auth = require('./routes/auth');

app.use('/api/courses', courses);
app.use('/api/auth', auth);

console.log('✅ All routes mounted successfully');

// ===== Start Server =====
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`🎉 SERVER WORKING on port ${PORT}`);
  console.log(`🔗 Health: /api/health`);
  console.log(`📚 Courses: /api/courses`);
  console.log(`👤 Auth/Register/Login: /api/auth/*`);
});
