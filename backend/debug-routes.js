console.log('🔍 Debugging route exports...\n');

// Test auth routes
try {
  const authModule = require('./routes/auth');
  console.log('Auth module type:', typeof authModule);
  console.log('Auth module keys:', Object.keys(authModule));
  console.log('Is function:', typeof authModule === 'function');
  console.log('Is object:', typeof authModule === 'object');
  console.log('---');
} catch (error) {
  console.log('❌ Auth route error:', error.message);
}

// Test course routes
try {
  const courseModule = require('./routes/courses');
  console.log('Course module type:', typeof courseModule);
  console.log('Course module keys:', Object.keys(courseModule));
  console.log('Is function:', typeof courseModule === 'function');
  console.log('Is object:', typeof courseModule === 'object');
  console.log('---');
} catch (error) {
  console.log('❌ Course route error:', error.message);
}

console.log('✅ Debug completed');