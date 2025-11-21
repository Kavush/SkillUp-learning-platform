const express = require('express');

console.log('🔍 Debugging route creation...');

// Test 1: Create router directly
const router1 = express.Router();
console.log('Router 1 type:', typeof router1);
console.log('Router 1 has get method:', typeof router1.get === 'function');

// Test 2: What happens in our route files
const routeContent = `
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'test' }));
module.exports = router;
`;

console.log('Route content would create a:', typeof express.Router());

// Test 3: Check if express.Router exists
console.log('express.Router type:', typeof express.Router);
console.log('express.Router is function:', typeof express.Router === 'function');