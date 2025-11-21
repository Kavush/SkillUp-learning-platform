const mongoose = require('mongoose');
require('dotenv').config();

async function testModel() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
    
    // Try to require the Course model
    const Course = require('./models/Course');
    console.log('✅ Course model loaded');
    
    // Test basic operations
    const count = await Course.countDocuments();
    console.log(`📊 Current courses in DB: ${count}`);
    
    mongoose.connection.close();
    console.log('✅ Test completed');
  } catch (error) {
    console.error('❌ Model test failed:', error.message);
  }
}

testModel();