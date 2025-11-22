import React, { useState, useEffect } from 'react';
import { Award, BookOpen, TrendingUp, CheckCircle, Play, Download, Video, FileText, Eye, EyeOff, Mail, Phone, Lock } from 'lucide-react';
import { coursesAPI, authAPI } from './services/api';

function App() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [completedCourses, setCompletedCourses] = useState([]);
  const [quizResults, setQuizResults] = useState({});
  const [activeContentType, setActiveContentType] = useState('modules');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // courses data as fallback
  const fallbackCourses = [
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

  // course quizzes
  const courseQuizzes = {
    1: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language", 
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language"
        ],
        correct: 0
      }
    ],
    2: [
      {
        id: 1,
        question: "What does SEO stand for?",
        options: [
          "Search Engine Optimization",
          "Social Engagement Outreach",
          "Systematic Evaluation Operation",
          "Search Enhancement Operation"
        ],
        correct: 0
      }
    ],
    3: [
      {
        id: 1,
        question: "What is the rule of thirds in design?",
        options: [
          "A composition guideline",
          "A color theory principle",
          "A typography rule",
          "A software feature"
        ],
        correct: 0
      }
    ],
    4: [
    {
      id: 1,
      question: "What is the primary function of Excel?",
      options: [
        "Word processing",
        "Data analysis and calculation",
        "Graphic design",
        "Web development"
      ],
      correct: 1
    }
  ],
  5: [
    {
      id: 1,
      question: "What is React Native used for?",
      options: [
        "Web development",
        "Mobile app development",
        "Desktop applications",
        "Game development"
      ],
      correct: 1
        }
  ],
  6: [
    {
      id: 1,
      question: "What is a business plan?",
      options: [
        "A financial document only",
        "A roadmap for business success",
        "A marketing strategy",
        "A legal requirement"
      ],
      correct: 1
    }
  ],
  7: [
    {
      id: 1,
      question: "What is Machine Learning?",
      options: [
        "Computers learning without explicit programming",
        "A type of computer hardware",
        "A programming language",
            "A database management system"
      ],
      correct: 0
    }
  ],
  8: [
    {
      id: 1,
      question: "What is phishing?",
      options: [
        "A fishing technique",
        "A type of cyber attack using deceptive emails",
        "A network protocol",
        "A programming language"
      ],
      correct: 1
    }
  ],
  9: [
    {
      id: 1,
      question: "What is Python primarily used for?",
      options: [
        "Web development and data science",
        "Graphic design",
         "Network configuration",
        "Hardware programming"
      ],
      correct: 0
    }
  ],
  10: [
    {
      id: 1,
      question: "What is the primary focus of UI/UX design?",
      options: [
        "User satisfaction",
        "Code efficiency",
        "Server performance",
        "Database design"
      ],
      correct: 0
    }
  ],

  };

  // Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await coursesAPI.getAll();
        console.log('Full API response:', response);
      console.log('Courses from backend:', response.data.courses);
      
          setCourses(fallbackCourses);
        
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    setCourses(fallbackCourses);
  } finally {
    setLoading(false);
  }
};

fetchCourses();
  }, []);

useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
        setIsRegistered(true);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);
    
  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, password, confirmPassword } = userData;
    
    if (!isLogin) {
      if (!firstName.trim() || !lastName.trim()) {
        alert('Please enter your first and last name');
        return false;
      }
      
    
    if (!phone.match(/^[\+]?[1-9][\d]{0,15}$/)) {
      alert('Please enter a valid phone number');
      return false;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false;
    }
     
    return true;
    
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
const response = await authAPI.register(userData);
localStorage.setItem('token', response.data.token);
      
      const user = response.data.user || response.data.data || response.data;
        
        if (!user.firstName && userData.firstName) {
          user.firstName = userData.firstName;
        }
        if (!user.lastName && userData.lastName) {
          user.lastName = userData.lastName;
        }
        
        localStorage.setItem('user', JSON.stringify(user));
        setCurrentUser(user);
        setIsRegistered(true);

        setUserData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
      
      } catch (error) {
        alert (error.response?.data?.error || 'Registration failed');
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    
    try {
      const response = await authAPI.login({ email, password });
      localStorage.setItem('token', response.data.token);
     
      const user = response.data.user || response.data.data || response.data;
      localStorage.setItem('user', JSON.stringify(user));
      
      setCurrentUser(user);
      setIsRegistered(true);
      
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
      
    } catch (error) {
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsRegistered(false);
    setIsLogin(false);
    setUserProgress({});
    setCompletedCourses([]);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const startCourse = (courseId) => {
    setUserProgress(prev => ({ ...prev, [courseId]: 0 }));
    setSelectedCourse(courses.find(course => course.id === courseId));
    setActiveContentType('modules');
  };

  const updateProgress = (courseId, progress) => {
    const newProgress = { ...userProgress, [courseId]: progress };
    setUserProgress(newProgress);

    if (progress >= 100 && !completedCourses.includes(courseId)) {
      setCompletedCourses(prev => [...prev, courseId]);
    }
  };

  const downloadCertificate = (courseId) => {
    const course = courses.find(c => c.id === courseId);
    alert(`🎉 Certificate downloaded for "${course.title}"!\n\nCongratulations ${currentUser?.firstName}!`);
  };

  const takeQuiz = (courseId, quizId) => {
    const quiz = courseQuizzes[courseId]?.[quizId];
    if (!quiz) return;

    const userAnswer = prompt(`Quiz: ${quiz.question}\n\nOptions:\n${quiz.options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n')}\n\nEnter your answer (1-4):`);
    
    if (userAnswer !== null) {
      const answerIndex = parseInt(userAnswer) - 1;
      const isCorrect = answerIndex === quiz.correct;
      
      setQuizResults(prev => ({
        ...prev,
        [`${courseId}-${quizId}`]: isCorrect
      }));

      alert(isCorrect ? "✅ Correct! Well done!" : "❌ Incorrect. Keep learning!");
    }
  };

  // CourseModal Component
  const CourseModal = ({ course, onClose }) => {
    const [currentModule, setCurrentModule] = useState(1);
    const progress = userProgress[course.id] || 0;

    const completeModule = () => {
      const newProgress = Math.min(100, ((currentModule) / course.modules) * 100);
      updateProgress(course.id, newProgress);
      
      if (currentModule < course.modules) {
        setCurrentModule(currentModule + 1);
      }
    };

    const renderContent = () => {
      switch (activeContentType) {
        case 'videos':
          return (
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Video Lessons</h4>
              {Array.from({ length: course.videos }, (_, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
                  <Video className="text-red-500" size={20} />
                  <div>
                    <h5 className="font-medium">Video {i + 1}: {course.title} Tutorial</h5>
                    <p className="text-sm text-gray-600">Watch and learn key concepts</p>
                  </div>
                  <button className="ml-auto bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                    Watch
                  </button>
                </div>
              ))}
            </div>
          );

        case 'notes':
          return (
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Study Notes</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="text-blue-600" size={20} />
                  <h5 className="font-semibold">Key Concepts Summary</h5>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Important definitions and terminology</li>
                  <li>• Step-by-step procedures</li>
                  <li>• Best practices and tips</li>
                  <li>• Common pitfalls to avoid</li>
                </ul>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                  Download Notes PDF
                </button>
              </div>
            </div>
          );

        case 'quizzes':
          return (
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Knowledge Check</h4>
              {courseQuizzes[course.id]?.map((quiz, index) => (
                <div key={quiz.id || index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium mb-3">Q{index + 1}: {quiz.question}</h5>
                  <button 
                    onClick={() => takeQuiz(course.id, index)}
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
                  >
                    Take Quiz
                  </button>
                  {quizResults[`${course.id}-${index}`] !== undefined && (
                    <span className={`ml-3 text-sm ${quizResults[`${course.id}-${index}`] ? 'text-green-600' : 'text-red-600'}`}>
                      {quizResults[`${course.id}-${index}`] ? '✅ Correct' : '❌ Try Again'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          );

        default:
          return (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Module {currentModule} of {course.modules}
              </h4>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-6xl mb-4 text-center">{course.image}</div>
                <h5 className="text-lg font-semibold mb-2 text-center">
                  {course.title} - Module {currentModule}
                </h5>
                <p className="text-gray-600 mb-4 text-center">
                  This module covers essential concepts and practical exercises.
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button 
                    onClick={() => setActiveContentType('videos')}
                    className="flex items-center justify-center space-x-1 bg-red-50 text-red-700 py-2 rounded text-sm hover:bg-red-100"
                  >
                    <Video size={14} />
                    <span>Videos</span>
                  </button>
                  <button 
                    onClick={() => setActiveContentType('notes')}
                    className="flex items-center justify-center space-x-1 bg-blue-50 text-blue-700 py-2 rounded text-sm hover:bg-blue-100"
                  >
                    <FileText size={14} />
                    <span>Notes</span>
                  </button>
                  <button 
                    onClick={() => setActiveContentType('quizzes')}
                    className="flex items-center justify-center space-x-1 bg-green-50 text-green-700 py-2 rounded text-sm hover:bg-green-100"
                  >
                    <Award size={14} />
                    <span>Quizzes</span>
                  </button>
                </div>

                <button
                  onClick={completeModule}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  {currentModule === course.modules ? 'Complete Course' : 'Complete Module'}
                </button>
              </div>
            </div>
          );
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <p className="text-gray-600 mt-2">{course.description}</p>
            
            <div className="flex space-x-4 mt-4">
              {[
                { id: 'modules', label: 'Modules', icon: BookOpen },
                { id: 'videos', label: 'Videos', icon: Video },
                { id: 'notes', label: 'Notes', icon: FileText },
                { id: 'quizzes', label: 'Quizzes', icon: Award }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveContentType(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium ${
                    activeContentType === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {renderContent()}

            {progress >= 100 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-green-800">Course Completed! 🎉</h5>
                    <p className="text-green-600 text-sm">You've successfully completed this course</p>
                  </div>
                  <button
                    onClick={() => downloadCertificate(course.id)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    <Download size={16} />
                    <span>Get Certificate</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // REGISTRATION/LOGIN INTERFACE
  if (!isRegistered || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">SkillUp</h1>
            <p className="text-xl text-gray-600 font-light">Empowering Youth Through Skills</p>
            
            <div className="flex bg-gray-100 rounded-lg p-1 mt-4">
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md transition ${
                  !isLogin 
                    ? 'bg-white shadow-sm text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Register
              </button>
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md transition ${
                  isLogin 
                    ? 'bg-white shadow-sm text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Login
              </button>
            </div>
          </div>

          <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    value={userData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    value={userData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-400" size={16} />
                </div>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john.doe@example.com"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="text-gray-400" size={16} />
                  </div>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1234567890"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-400" size={16} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={userData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder={isLogin ? "Enter your password" : "Create a password"}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff size={16} className="text-gray-400" /> : <Eye size={16} className="text-gray-400" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="text-gray-400" size={16} />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={userData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? <EyeOff size={16} className="text-gray-400" /> : <Eye size={16} className="text-gray-400" />}
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-lg mt-4"
            >
              {isLogin ? 'Login to Your Account' : 'Create Your Account'}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                {isLogin ? 'Register here' : 'Login here'}
              </button>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-gray-800">{courses.length}+</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">Free</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Learning</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">Join thousands of learners worldwide</p>
          </div>
        </div>
      </div>
    );
  }

  // MAIN APP INTERFACE AFTER LOGIN
  return (
    <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SU</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SkillUp</h1>
                <p className="text-sm text-gray-600">
                  Welcome, {currentUser?.firstName || currentUser?.name || 'User'} {currentUser?.lastName || ''}!
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <div className="text-sm text-gray-600">Progress</div>
                <div className="text-lg font-bold text-blue-600">
                  {completedCourses.length}/{courses.length} completed
                </div>
              </div>
              <Award className="text-yellow-500" size={28} />
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'progress', label: 'My Progress', icon: TrendingUp },
              { id: 'certificates', label: 'Certificates', icon: Award }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'courses' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h2>
              <p className="text-gray-600">Choose from {courses.length} industry-relevant skills courses</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map(course => {
                const progress = userProgress[course.id] || 0;
                const isCompleted = completedCourses.includes(course.id);
                
                return (
                  <div key={course.id || course._id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{course.image}</div>
                      {isCompleted && (
                        <CheckCircle className="text-green-500" size={24} />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Video size={12} />
                        <span>{course.videos} videos</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award size={12} />
                        <span>{courseQuizzes[course.id]?.length || 0} quizzes</span>
                      </div>
                      {course.notes && (
                        <div className="flex items-center space-x-1">
                          <FileText size={12} />
                          <span>Notes</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{course.duration}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    
                    {progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => startCourse(course.id)}
                      className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      <Play size={16} />
                      <span>
                        {progress === 0 ? 'Start Learning' : 
                         progress >= 100 ? 'Review Course' : 'Continue Learning'}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Learning Progress</h2>
            <div className="space-y-6">
              {courses.map(course => {
                const progress = userProgress[course.id] || 0;
                return (
                  <div key={course.id || course._id} className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{course.image}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                          <p className="text-gray-600">{course.duration} • {course.level}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{Math.round(progress)}%</div>
                        <div className="text-sm text-gray-500">Complete</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all ${
                          progress >= 100 ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Certificates</h2>
            {completedCourses.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <Award size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No certificates yet</h3>
                <p className="text-gray-500 mb-6">Complete courses to earn certificates</p>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Browse Courses
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {completedCourses.map(courseId => {
                  const course = courses.find(c => c.id === courseId);
                  return (
                    <div key={courseId} className="bg-white rounded-xl shadow-sm p-6 border-2 border-green-200">
                      <div className="text-center">
                        <Award className="mx-auto text-green-500 mb-4" size={48} />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <p className="text-gray-600 mb-4">Certificate of Completion</p>
                        <p className="text-sm text-gray-500 mb-6">Awarded to {currentUser?.firstName} {currentUser?.lastName}</p>
                        <button
                          onClick={() => downloadCertificate(courseId)}
                          className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                          <Download size={16} />
                          <span>Download Certificate</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>

      {selectedCourse && (
        <CourseModal 
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}

export default App;