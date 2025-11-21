// FIXED COURSES ROUTES
console.log('Loading courses routes...');

// Import express and create router
const express = require('express');
const router = express.Router();

// Add routes
router.get('/', function(req, res) {
  console.log('Courses route called');
  res.json({ 
    success: true,
    message: 'Courses API is working!',
    courses: [
      { id: 1, title: 'Web Development Fundamentals', category: 'Technology' },
      { id: 2, title: 'Digital Marketing Mastery', category: 'Marketing' },
      { id: 3, title: 'Graphic Design Principles', category: 'Design' }
    ]
  });
});

router.get('/:id', function(req, res) {
  res.json({ 
    success: true,
    message: `Course ${req.params.id} details`,
    course: { 
      id: req.params.id, 
      title: `Course ${req.params.id}`,
      description: 'Course description here'
    }
  });
});

console.log('Courses router created, type:', typeof router);
module.exports = router;