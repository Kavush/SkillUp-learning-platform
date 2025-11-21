const express = require('express');
const app = express();

console.log('🚀 Starting INLINE SkillUp Backend...');

app.use(express.json());

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Inline server working!' });
});

// INLINE routes - no imports
app.get('/api/courses', (req, res) => {
  res.json({ 
    message: 'Inline courses route',
    courses: ['Course 1', 'Course 2', 'Course 3']
  });
});

app.get('/api/courses/:id', (req, res) => {
  res.json({ 
    message: `Course ${req.params.id}`,
    id: req.params.id
  });
});

app.post('/api/auth/register', (req, res) => {
  res.json({ 
    message: 'User registered inline',
    user: req.body
  });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ 
    message: 'Login successful inline',
    token: 'jwt-token-here'
  });
});

const PORT = 5003;
app.listen(PORT, () => {
  console.log(`🎉 INLINE Server on http://localhost:${PORT}`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health`);
  console.log(`📚 Courses: http://localhost:${PORT}/api/courses`);
});