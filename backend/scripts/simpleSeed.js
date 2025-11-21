const mongoose = require('mongoose');
require('dotenv').config();

// Direct model definition
const courseSchema = new mongoose.Schema({
    id: Number, 
  title: String,
  description: String,
  duration: String,
  level: String,
  modules: Number,
  category: String,
  image: String,
  videos: Number,
  quizzes: Number,
  notes: Boolean
});

const Course = mongoose.model('Course', courseSchema);

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript to build modern websites",
    duration: "6 weeks",
    level: "Beginner",
    modules: 12,
    category: "Technology",
    image: "🌐",
    videos: 8,
    quizzes: 5,
    notes: true
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description: "Master social media, SEO, and content marketing strategies",
    duration: "4 weeks",
    level: "Beginner",
    modules: 8,
    category: "Marketing",
    image: "📱",
    videos: 6,
    quizzes: 5,
    notes: true
  },
  {
    id: 3,
    title: "Graphic Design Principles",
    description: "Learn design fundamentals and tools like Figma and Canva",
    duration: "5 weeks",
    level: "Intermediate",
    modules: 10,
    category: "Design",
    image: "🎨",
    videos: 7,
    quizzes: 5,
    notes: true
  },
  {
    id: 4,
    title: "Data Analysis Basics",
    description: "Introduction to data analysis with Excel and basic statistics",
    duration: "6 weeks",
    level: "Intermediate",
    modules: 12,
    category: "Business",
    image: "📊",
    videos: 8,
    quizzes: 5,
    notes: true
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build cross-platform apps with React Native",
    duration: "8 weeks",
    level: "Advanced",
    modules: 16,
    category: "Technology",
    image: "📱",
    videos: 10,
    quizzes: 5,
    notes: true
  },
  {
    id: 6,
    title: "Entrepreneurship 101",
    description: "Learn how to start and grow your own business",
    duration: "4 weeks",
    level: "Beginner",
    modules: 8,
    category: "Business",
    image: "💼",
    videos: 5,
    quizzes: 5,
    notes: true
  },
  {
    id: 7,
    title: "AI & Machine Learning",
    description: "Introduction to artificial intelligence and ML concepts",
    duration: "8 weeks",
    level: "Intermediate",
    modules: 14,
    category: "Technology",
    image: "🤖",
    videos: 10,
    quizzes: 5,
    notes: true
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity principles and practices",
    duration: "6 weeks",
    level: "Beginner",
    modules: 10,
    category: "Security",
    image: "🔒",
    videos: 7,
    quizzes: 5,
    notes: true
  },
  {
    id: 9,
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts",
    duration: "7 weeks",
    level: "Beginner",
    modules: 14,
    category: "Programming",
    image: "🐍",
    videos: 9,
    quizzes: 5,
    notes: true
  },
  {
    id: 10,
    title: "UI/UX Design",
    description: "Master user interface and user experience design",
    duration: "6 weeks",
    level: "Intermediate",
    modules: 12,
    category: "Design",
    image: "🎯",
    videos: 8,
    quizzes: 5,
    notes: true
  },
  {
    id: 11,
    title: "Cloud Computing",
    description: "Introduction to AWS, Azure, and Google Cloud",
    duration: "5 weeks",
    level: "Intermediate",
    modules: 10,
    category: "Technology",
    image: "☁️",
    videos: 7,
    quizzes: 5,
    notes: true
  },
  {
    id: 12,
    title: "Financial Literacy",
    description: "Learn budgeting, investing, and personal finance",
    duration: "4 weeks",
    level: "Beginner",
    modules: 8,
    category: "Finance",
    image: "💰",
    videos: 6,
    quizzes: 5,
    notes: true
  },
  {
    id: 13,
    title: "Content Writing",
    description: "Master the art of compelling content creation",
    duration: "4 weeks",
    level: "Beginner",
    modules: 8,
    category: "Writing",
    image: "✍️",
    videos: 5,
    quizzes: 5,
    notes: true
  },
  {
    id: 14,
    title: "Project Management",
    description: "Learn Agile, Scrum, and project management tools",
    duration: "6 weeks",
    level: "Intermediate",
    modules: 12,
    category: "Business",
    image: "📋",
    videos: 8,
    quizzes: 5,
    notes: true
  },
  {
    id: 15,
    title: "Data Science",
    description: "Introduction to data science and analytics",
    duration: "8 weeks",
    level: "Advanced",
    modules: 16,
    category: "Technology",
    image: "🔬",
    videos: 10,
    quizzes: 5,
    notes: true
  },
  {
    id: 16,
    title: "Photography Basics",
    description: "Learn camera settings, composition, and editing",
    duration: "5 weeks",
    level: "Beginner",
    modules: 10,
    category: "Creative",
    image: "📷",
    videos: 7,
    quizzes: 5,
    notes: true
  },
  {
    id: 17,
    title: "Public Speaking",
    description: "Master communication and presentation skills",
    duration: "4 weeks",
    level: "Beginner",
    modules: 8,
    category: "Communication",
    image: "🎤",
    videos: 6,
    quizzes: 5,
    notes: true
  },
  {
    id: 18,
    title: "Blockchain Technology",
    description: "Understanding blockchain and cryptocurrencies",
    duration: "6 weeks",
    level: "Intermediate",
    modules: 12,
    category: "Technology",
    image: "⛓️",
    videos: 8,
    quizzes: 5,
    notes: true
  },
  {
    id: 19,
    title: "Social Media Management",
    description: "Learn to manage and grow social media presence",
    duration: "4 weeks",
    level: "Beginner",
    modules: 8,
    category: "Marketing",
    image: "📢",
    videos: 6,
    quizzes: 5,
    notes: true
  },
  {
    id: 20,
    title: "Video Editing",
    description: "Master video editing with professional tools",
    duration: "6 weeks",
    level: "Intermediate",
    modules: 12,
    category: "Creative",
    image: "🎬",
    videos: 8,
    quizzes: 5,
    notes: true
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🗑️ Clearing existing courses...');
    await Course.deleteMany({});
    
    console.log('🌱 Seeding courses...');
    await Course.insertMany(courses);
    
    console.log(`✅ Successfully seeded ${courses.length} courses!`);
    
    // Verify the seed
    const count = await Course.countDocuments();
    console.log(`📊 Total courses in database: ${count}`);
    
    process.exit();
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();