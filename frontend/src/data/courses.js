export const courses = [
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

  // Quiz questions - 5 quizzes for each course
  export const courseQuizzes = {
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
      },
      {
        id: 2,
        question: "Which CSS property is used to change text color?",
        options: [
          "text-color",
          "font-color",
          "color",
          "text-style"
        ],
        correct: 2
      },
      {
        id: 3,
        question: "What is JavaScript primarily used for in web development?",
        options: [
          "Styling web pages",
          "Adding interactivity",
          "Database management",
          "Server configuration"
        ],
        correct: 1
      },
      {
        id: 4,
        question: "Which HTML tag is used for the largest heading?",
        options: [
          "<h6>",
          "<heading>",
          "<h1>",
          "<head>"
        ],
        correct: 2
      },
      {
        id: 5,
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style System",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correct: 2
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
      },
      {
        id: 2,
        question: "Which platform is best for professional networking?",
        options: [
          "Instagram",
          "LinkedIn",
          "TikTok",
          "Snapchat"
        ],
        correct: 1
      },
      {
        id: 3,
        question: "What is the primary goal of content marketing?",
        options: [
          "Direct selling",
          "Entertainment only",
          "Building trust and authority",
          "Social media trends"
        ],
        correct: 2
      },
      {
        id: 4,
        question: "Which metric measures engagement rate?",
        options: [
          "Impressions",
          "Click-through rate",
          "Likes and comments relative to followers",
          "Follower count"
        ],
        correct: 2
      },
      {
        id: 5,
        question: "What is A/B testing used for?",
        options: [
          "Comparing two versions of content",
          "Budget allocation",
          "Team management",
          "Social media scheduling"
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
      },
      {
        id: 2,
        question: "Which tool is primarily used for UI design?",
        options: [
          "Photoshop",
          "Figma",
          "Excel",
          "Word"
        ],
        correct: 1
      },
      {
        id: 3,
        question: "What does RGB stand for?",
        options: [
          "Red, Green, Blue",
          "Right, Good, Best",
          "Real Graphic Balance",
          "Rich Graphic Background"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is kerning in typography?",
        options: [
          "Font size adjustment",
          "Space between characters",
          "Line spacing",
          "Font weight"
        ],
        correct: 1
      },
      {
        id: 5,
        question: "Which file format supports transparency?",
        options: [
          "JPG",
          "BMP",
          "PNG",
          "GIF"
        ],
        correct: 2
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
      },
      {
        id: 2,
        question: "Which Excel feature is used for data summarization?",
        options: [
          "Pivot Tables",
          "Conditional Formatting",
          "Formulas",
          "Charts"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What does VLOOKUP do in Excel?",
        options: [
          "Creates vertical lines",
          "Looks up values in a table",
          "Validates data entry",
          "Formats cells vertically"
        ],
        correct: 1
      },
      {
        id: 4,
        question: "Which chart is best for showing trends over time?",
        options: [
          "Pie Chart",
          "Line Chart",
          "Bar Chart",
          "Scatter Plot"
        ],
        correct: 1
      },
      {
        id: 5,
        question: "What is the purpose of data validation?",
        options: [
          "To make data look pretty",
          "To restrict data entry to specific criteria",
          "To automatically delete incorrect data",
          "To backup data"
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
      },
      {
        id: 2,
        question: "Which programming language is React Native based on?",
        options: [
          "Python",
          "Java",
          "JavaScript",
          "C++"
        ],
        correct: 2
      },
      {
        id: 3,
        question: "What is a component in React Native?",
        options: [
          "A database table",
          "A reusable UI element",
          "A server configuration",
          "A testing framework"
        ],
        correct: 1
      },
      {
        id: 4,
        question: "Which command creates a new React Native project?",
        options: [
          "npm create react-app",
          "npx react-native init",
          "ng new",
          "vue create"
        ],
        correct: 1
      },
      {
        id: 5,
        question: "What is JSX?",
        options: [
          "A JavaScript framework",
          "A syntax extension for JavaScript",
          "A database language",
          "A testing tool"
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
      },
      {
        id: 2,
        question: "What does MVP stand for in entrepreneurship?",
        options: [
          "Most Valuable Player",
          "Minimum Viable Product",
          "Maximum Value Proposition",
          "Main Venture Plan"
        ],
        correct: 1
      },
      {
        id: 3,
        question: "What is market research used for?",
        options: [
          "Understanding customer needs",
          "Setting prices only",
          "Hiring employees",
          "Legal compliance"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "Which funding source doesn't require giving up equity?",
        options: [
          "Venture Capital",
          "Angel Investors",
          "Bank Loan",
          "Crowdfunding with equity"
        ],
        correct: 2
      },
      {
        id: 5,
        question: "What is a unique selling proposition (USP)?",
        options: [
          "A company's legal structure",
          "What makes a business different from competitors",
          "A pricing strategy",
          "A marketing budget"
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
      },
      {
        id: 2,
        question: "Which is a supervised learning algorithm?",
        options: [
          "K-means clustering",
          "Linear regression",
          "Principal component analysis",
          "Apriori algorithm"
        ],
        correct: 1
      },
      {
        id: 3,
        question: "What is neural network in AI?",
        options: [
          "A computer network",
          "A system inspired by human brain",
          "A database system",
          "A programming language"
        ],
        correct: 1
      },
      {
        id: 4,
        question: "What is the purpose of training data?",
        options: [
          "To test the final model",
          "To teach the machine learning model",
          "To backup data",
          "To clean data"
        ],
        correct: 1
      },
      {
        id: 5,
        question: "Which programming language is commonly used in AI?",
        options: [
          "HTML",
          "Python",
          "CSS",
          "SQL"
        ],
        correct: 1
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
      },
      {
        id: 2,
        question: "What is two-factor authentication?",
        options: [
          "Using two passwords",
          "An extra layer of security",
          "Two firewalls",
          "Double encryption"
        ],
        correct: 1
      },
      {
        id: 3,
        question: "What is malware?",
        options: [
          "Hardware malfunction",
          "Malicious software",
          "Slow internet",
          "Outdated software"
        ],
        correct: 1
      },
      {
        id: 4,
        question: "What does VPN stand for?",
        options: [
          "Virtual Private Network",
          "Very Protected Network",
          "Verified Public Network",
          "Virtual Public Node"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is encryption used for?",
        options: [
          "Speeding up internet",
          "Protecting data privacy",
          "Increasing storage",
          "Improving graphics"
        ],
        correct: 1
      }
    ],
    // Additional quizzes for remaining courses (similar pattern)
    9: generateProgrammingQuizzes("Python"),
    10: generateDesignQuizzes("UI/UX"),
    11: generateTechQuizzes("Cloud Computing"),
    12: generateFinanceQuizzes(),
    13: generateWritingQuizzes(),
    14: generateManagementQuizzes(),
    15: generateDataScienceQuizzes(),
    16: generatePhotographyQuizzes(),
    17: generateCommunicationQuizzes(),
    18: generateBlockchainQuizzes(),
    19: generateMarketingQuizzes("Social Media"),
    20: generateCreativeQuizzes("Video Editing")
  };

  // Helper functions to generate quizzes for remaining courses
  function generateProgrammingQuizzes(language) {
    return [
      {
        id: 1,
        question: `What is ${language} primarily used for?`,
        options: [
          "Web development and data science",
          "Graphic design",
          "Network configuration",
          "Hardware programming"
        ],
        correct: 0
      },
      {
        id: 2,
        question: `Which data type is mutable in ${language}?`,
        options: ["List", "Tuple", "String", "Number"],
        correct: 0
      },
      {
        id: 3,
        question: `What is PEP 8 in ${language}?`,
        options: [
          "A style guide",
          "A package manager",
          "A framework",
          "A database"
        ],
        correct: 0
      },
      {
        id: 4,
        question: `Which keyword defines a function in ${language}?`,
        options: ["function", "def", "func", "define"],
        correct: 1
      },
      {
        id: 5,
        question: `What are ${language} libraries used for?`,
        options: [
          "Extending functionality",
          "Memory management",
          "Speed optimization",
          "User interface"
        ],
        correct: 0
      }
    ];
  }

  function generateDesignQuizzes(type) {
    return [
      {
        id: 1,
        question: `What is the primary focus of ${type} design?`,
        options: [
          "User satisfaction",
          "Code efficiency",
          "Server performance",
          "Database design"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is wireframing used for?",
        options: [
          "Layout planning",
          "Color selection",
          "Content writing",
          "Code testing"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "Which principle emphasizes consistency?",
        options: [
          "Visual hierarchy",
          "Consistency",
          "Contrast",
          "Alignment"
        ],
        correct: 1
      },
      {
        id: 4,
        question: "What does UX research involve?",
        options: [
          "Understanding user behavior",
          "Writing code",
          "Server maintenance",
          "Database optimization"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "Which tool is NOT typically used for UI design?",
        options: ["Figma", "Sketch", "Adobe XD", "Excel"],
        correct: 3
      }
    ];
  }

  function generateTechQuizzes(topic) {
    return [
      {
        id: 1,
        question: `What is the main benefit of ${topic}?`,
        options: [
          "Scalability and cost-efficiency",
          "Better graphics",
          "Faster coding",
          "Simplified design"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "Which is a popular cloud service provider?",
        options: ["AWS", "Photoshop", "Figma", "Excel"],
        correct: 0
      },
      {
        id: 3,
        question: "What is IaaS in cloud computing?",
        options: [
          "Infrastructure as a Service",
          "Internet as a Service",
          "Integration as a Service",
          "Interface as a Service"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is virtualization?",
        options: [
          "Creating virtual versions of resources",
          "Making apps faster",
          "Improving graphics",
          "Writing better code"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "Which is NOT a cloud deployment model?",
        options: ["Public", "Private", "Hybrid", "Personal"],
        correct: 3
      }
    ];
  }

  function generateFinanceQuizzes() {
    return [
      {
        id: 1,
        question: "What is compound interest?",
        options: [
          "Interest on interest",
          "Simple interest",
          "Fixed interest",
          "Variable interest"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is an emergency fund for?",
        options: [
          "Unexpected expenses",
          "Vacation planning",
          "Luxury purchases",
          "Investment only"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What does ROI stand for?",
        options: [
          "Return on Investment",
          "Rate of Interest",
          "Return on Income",
          "Rate of Investment"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is diversification in investing?",
        options: [
          "Spreading investments to reduce risk",
          "Investing in one stock",
          "Saving money in bank",
          "Spending all money"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is a budget used for?",
        options: [
          "Tracking income and expenses",
          "Increasing income",
          "Reducing taxes",
          "Getting loans"
        ],
        correct: 0
      }
    ];
  }

  function generateWritingQuizzes() {
    return [
      {
        id: 1,
        question: "What is the purpose of a headline?",
        options: [
          "Grab attention",
          "Fill space",
          "Meet word count",
          "Use keywords"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is SEO writing?",
        options: [
          "Writing for search engines",
          "Creative writing",
          "Technical writing",
          "Academic writing"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is the ideal readability score for web content?",
        options: [
          "Grade 8-9 level",
          "Grade 12 level",
          "College level",
          "Graduate level"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is call-to-action (CTA) used for?",
        options: [
          "Encouraging user action",
          "Filling space",
          "Adding keywords",
          "Meeting length requirements"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is the purpose of proofreading?",
        options: [
          "Eliminating errors",
          "Adding content",
          "Changing style",
          "Increasing length"
        ],
        correct: 0
      }
    ];
  }

  function generateManagementQuizzes() {
    return [
      {
        id: 1,
        question: "What is Agile methodology?",
        options: [
          "Iterative project management",
          "Waterfall approach",
          "Traditional management",
          "Financial planning"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is a sprint in Scrum?",
        options: [
          "A time-boxed iteration",
          "A meeting",
          "A document",
          "A tool"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is the role of a Product Owner?",
        options: [
          "Representing stakeholders",
          "Writing code",
          "Designing UI",
          "Testing software"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is risk management?",
        options: [
          "Identifying and mitigating risks",
          "Avoiding all risks",
          "Ignoring risks",
          "Creating risks"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is a Gantt chart used for?",
        options: [
          "Project scheduling",
          "Budget planning",
          "Team management",
          "Risk assessment"
        ],
        correct: 0
      }
    ];
  }

  function generateDataScienceQuizzes() {
    return [
      {
        id: 1,
        question: "What is data cleaning?",
        options: [
          "Removing inaccurate data",
          "Adding more data",
          "Changing data format",
          "Deleting all data"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is machine learning?",
        options: [
          "Algorithms learning from data",
          "Data storage",
          "Data visualization",
          "Data collection"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is correlation?",
        options: [
          "Relationship between variables",
          "Data type",
          "Storage format",
          "Collection method"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is Python's pandas library used for?",
        options: [
          "Data manipulation",
          "Web development",
          "Game development",
          "Mobile apps"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is the purpose of data visualization?",
        options: [
          "Understanding patterns",
          "Storing data",
          "Cleaning data",
          "Collecting data"
        ],
        correct: 0
      }
    ];
  }

  function generatePhotographyQuizzes() {
    return [
      {
        id: 1,
        question: "What is aperture?",
        options: [
          "Lens opening size",
          "Shutter speed",
          "ISO setting",
          "White balance"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What does ISO control?",
        options: [
          "Camera sensitivity to light",
          "Image resolution",
          "Color balance",
          "Focus area"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is the rule of thirds?",
        options: [
          "Composition guideline",
          "Lighting technique",
          "Editing method",
          "Camera setting"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is depth of field?",
        options: [
          "Area in focus",
          "Image brightness",
          "Color saturation",
          "Image sharpness"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is white balance used for?",
        options: [
          "Color accuracy",
          "Exposure control",
          "Focus adjustment",
          "Image stabilization"
        ],
        correct: 0
      }
    ];
  }

  function generateCommunicationQuizzes() {
    return [
      {
        id: 1,
        question: "What is active listening?",
        options: [
          "Fully concentrating on the speaker",
          "Hearing without understanding",
          "Interrupting frequently",
          "Thinking about response while listening"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is nonverbal communication?",
        options: [
          "Body language and gestures",
          "Written messages",
          "Phone calls",
          "Emails"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is the purpose of a presentation?",
        options: [
          "Inform and persuade",
          "Fill time",
          "Show off skills",
          "Meet requirements"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is feedback important for?",
        options: [
          "Improving communication",
          "Criticizing others",
          "Winning arguments",
          "Showing superiority"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is empathy in communication?",
        options: [
          "Understanding others' feelings",
          "Agreeing with everyone",
          "Being nice",
          "Avoiding conflict"
        ],
        correct: 0
      }
    ];
  }

  function generateBlockchainQuizzes() {
    return [
      {
        id: 1,
        question: "What is blockchain?",
        options: [
          "Decentralized digital ledger",
          "Centralized database",
          "Programming language",
          "Network protocol"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is cryptocurrency?",
        options: [
          "Digital currency using cryptography",
          "Traditional bank money",
          "Stock market investment",
          "Real estate asset"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is mining in blockchain?",
        options: [
          "Validating transactions",
          "Creating new coins only",
          "Hacking attempts",
          "Data storage"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is a smart contract?",
        options: [
          "Self-executing contract",
          "Legal document",
          "Insurance policy",
          "Bank agreement"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What makes blockchain secure?",
        options: [
          "Cryptography and decentralization",
          "Central authority",
          "Government backing",
          "Bank insurance"
        ],
        correct: 0
      }
    ];
  }

  function generateMarketingQuizzes(type) {
    return [
      {
        id: 1,
        question: `What is ${type} marketing primarily used for?`,
        options: [
          "Brand awareness and engagement",
          "Direct sales only",
          "Customer service",
          "Product development"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is engagement rate?",
        options: [
          "Interaction with content",
          "Follower count",
          "Post frequency",
          "Ad spending"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is content calendar used for?",
        options: [
          "Planning content strategy",
          "Scheduling meetings",
          "Tracking expenses",
          "Managing team"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is analytics important for?",
        options: [
          "Measuring campaign success",
          "Creating content",
          "Designing graphics",
          "Writing captions"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is the best time to post on social media?",
        options: [
          "When audience is most active",
          "Early morning always",
          "Late night always",
          "Random times"
        ],
        correct: 0
      }
    ];
  }

  function generateCreativeQuizzes(topic) {
    return [
      {
        id: 1,
        question: `What is ${topic} primarily used for?`,
        options: [
          "Creating and modifying videos",
          "Photo editing only",
          "Audio recording",
          "Web development"
        ],
        correct: 0
      },
      {
        id: 2,
        question: "What is timeline in video editing?",
        options: [
          "Sequence of clips and audio",
          "Clock display",
          "Project deadline",
          "Recording schedule"
        ],
        correct: 0
      },
      {
        id: 3,
        question: "What is color grading?",
        options: [
          "Adjusting video colors",
          "Adding text",
          "Cropping video",
          "Adding music"
        ],
        correct: 0
      },
      {
        id: 4,
        question: "What is keyframing used for?",
        options: [
          "Creating animations and effects",
          "Adding watermarks",
          "Exporting videos",
          "Importing files"
        ],
        correct: 0
      },
      {
        id: 5,
        question: "What is the purpose of transitions?",
        options: [
          "Smooth scene changes",
          "Color correction",
          "Audio enhancement",
          "Text animation"
        ],
        correct: 0
      }
    ];
  }