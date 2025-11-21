console.log('Testing fixed auth import...');

// Clear cache
Object.keys(require.cache).forEach(key => delete require.cache[key]);

try {
  const auth = require('./routes/auth');
  console.log('✅ Auth loaded successfully');
  console.log('Type:', typeof auth);
  console.log('Is function:', typeof auth === 'function');
  console.log('Has get method:', typeof auth.get === 'function');
  console.log('Has post method:', typeof auth.post === 'function');
} catch (error) {
  console.log('❌ Error:', error.message);
}