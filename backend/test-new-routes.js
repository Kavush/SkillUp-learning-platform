console.log('Testing NEW routes...');

try {
  const courses = require('./routes-new/courses');
  const auth = require('./routes-new/auth');
  
  console.log('✅ Courses loaded - type:', typeof courses);
  console.log('✅ Auth loaded - type:', typeof auth);
  
  // Test if they have router methods
  console.log('✅ Courses has get method:', typeof courses.get === 'function');
  console.log('✅ Auth has post method:', typeof auth.post === 'function');
  
  console.log('🎉 NEW routes work perfectly!');
} catch (error) {
  console.log('❌ Error:', error.message);
}