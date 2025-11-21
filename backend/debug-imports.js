console.log('🔍 Debugging imports...\n');

// Clear cache
Object.keys(require.cache).forEach(key => delete require.cache[key]);

console.log('1. Testing courses import:');
try {
  const courses = require('./routes/courses');
  console.log('   Type:', typeof courses);
  console.log('   Is function:', typeof courses === 'function');
  console.log('   Has get method:', typeof courses.get === 'function');
} catch (error) {
  console.log('   ❌ Error:', error.message);
}

console.log('\n2. Testing auth import:');
try {
  const auth = require('./routes/auth');
  console.log('   Type:', typeof auth);
  console.log('   Is function:', typeof auth === 'function');
  console.log('   Has get method:', typeof auth.get === 'function');
  console.log('   Keys:', Object.keys(auth).slice(0, 5)); // Show first 5 keys
} catch (error) {
  console.log('   ❌ Error:', error.message);
}

console.log('\n3. Testing middleware auth import:');
try {
  const authMiddleware = require('./middleware/auth');
  console.log('   Type:', typeof authMiddleware);
  console.log('   Is function:', typeof authMiddleware === 'function');
} catch (error) {
  console.log('   ❌ Error:', error.message);
}