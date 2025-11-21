console.log('Testing routes...');

try {
  const courses = require('./routes/courses');
  const auth = require('./routes/auth');
  
  console.log('✅ Courses type:', typeof courses);
  console.log('✅ Auth type:', typeof auth);
  console.log('🎉 All routes loaded correctly!');
} catch (error) {
  console.log('❌ Error:', error.message);
}