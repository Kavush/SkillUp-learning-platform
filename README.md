🚀 SkillUp – Youth Empowerment Learning Platform

A modern full-stack learning platform designed to empower unemployed youth by giving access to practical courses and digital skills — contributing to SDG 8: Decent Work and Economic Growth.

🎯 Project Overview

SkillUp helps youth gain employable skills through structured courses, progress tracking, and downloadable certificates. Built with a clean UI, responsive design, and scalable architecture.

🌟 Key Features

📚 Course Library
20 curated learning tracks across:

Technology: Web Development, Mobile App Development, AI & Machine Learning, Python Programming, Cloud Computing, Blockchain Technology, Data Science

Marketing: Digital Marketing Mastery, Social Media Management

Design: Graphic Design Principles, UI/UX Design

Business: Data Analysis Basics, Entrepreneurship 101, Project Management

Finance: Financial Literacy

Creative: Photography Basics, Video Editing

Communication & Writing: Public Speaking, Content Writing

Security: Cybersecurity Fundamentals

Each course includes:

✅ Modules (4–16 depending on the course)

✅ Videos (5–10)

✅ Quizzes

✅ Notes (where applicable)

📄 Duration & Level

📊 Progress Tracking

Module-by-module tracking

Visual dashboards

Course completion percentages

🏆 Certificates

Auto-generated certificates

Personalized with learner name

Downloadable as image/PDF

🎓 Available Courses

Web Development Fundamentals – 12 modules, 8 videos, quizzes, notes

Digital Marketing Mastery – 8 modules, 6 videos, quizzes, notes

Graphic Design Principles – 10 modules, 7 videos, quizzes, notes

Data Analysis Basics – 12 modules, 8 videos, quizzes, notes

Mobile App Development – 16 modules, 10 videos, quizzes, notes

Entrepreneurship 101 – 8 modules, 5 videos, quizzes, notes

AI & Machine Learning – 14 modules, 10 videos, quizzes, notes

Cybersecurity Fundamentals – 10 modules, 7 videos, quizzes

Python Programming – 14 modules, 9 videos, quizzes, notes

UI/UX Design – 12 modules, 8 videos, quizzes, notes

Cloud Computing – 10 modules, 7 videos, quizzes, notes

Financial Literacy – 8 modules, 6 videos, quizzes, notes

Content Writing – 8 modules, 5 videos, quizzes, notes

Project Management – 12 modules, 8 videos, quizzes, notes

Data Science – 16 modules, 10 videos, quizzes, notes

Photography Basics – 10 modules, 7 videos, quizzes, notes

Public Speaking – 8 modules, 6 videos, quizzes, notes

Blockchain Technology – 12 modules, 8 videos, quizzes, notes

Social Media Management – 8 modules, 6 videos, quizzes, notes

Video Editing – 12 modules, 8 videos, quizzes, notes

🎨 Modern UI/UX

- Built with TailwindCSS

- Smooth animations

- Clean, responsive layout

👤 User Management

- Registration & login

- Local persistence (saved in localStorage)

- Personal dashboard

🛠️ Tech Stack
- Frontend

- React + Vite

- Tailwind CSS

- Lucide Icons

- Axios (API calls)

Backend

- Node.js + Express

- Local JSON data (future upgrade: MongoDB)

- Build Tools

- Vite

- PostCSS

- ES Modules

📦 Installation & Setup
Prerequisites

- Node.js v16+

- Git

Setup Instructions

1️⃣ Clone the repository
git clone https://github.com/Kavush/skillup-app.git
cd skillup-app

2️⃣ Install dependencies
npm install

3️⃣ Start the backend
cd backend
npm install
node server.js

4️⃣ Start the frontend
Open a second terminal:
cd ..
npm run dev

- Frontend: http://localhost:5173/

- Backend: http://localhost:5000/

📁 Project Structure
```skillup-app/
└── frontend/
   ├── .env
   ├── .gitignore
   ├── index.html
   ├── package.json
   ├── package-lock.json
   ├── postcss.config.cjs
   ├── tailwind.config.js
   ├── vite.config.js
   ├── dist/
   ├── public/
   ├── src/
│
└── backend/
    ├── .env
    ├── server.js
    ├── debug-imports.js
    ├── debug-route-creation.js
    ├── debug-routes.js
    ├── package.json
    ├── package-lock.json
    ├── railway.json
    ├── server-inline.js
    ├── test-fixed-auth.js
    ├── test-model.js
    ├── test-new-routes.js
    ├── test-routes.js
    │
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── scripts/
│
└──.env
└──.gitignore
└──site.webmanifest
└──README.md
```


🚀 How to Use

1️⃣ Register – Enter your details to create your learner profile.
2️⃣ Browse Courses – Explore skill tracks.
3️⃣ Start Learning – Click any course to open its modules.
4️⃣ Track Progress – Progress is saved automatically.
5️⃣ Earn Certificates – Download personalized certificates upon completion.

➕ Customization

- Add a new course: Edit src/data/courses.js or backend data file:
```{
  id: 7,
  title: "New Skill Course",
  duration: "4 weeks",
  modules: 8,
  icon: "🚀",
  skills: ["Skill 1", "Skill 2"],
  color: "from-blue-500 to-teal-500",
  description: "Course description…"
}
```
📱 Responsive Design

Optimized for:

- Mobile

- Tablet

- Desktop

- Large screens

🤝 Contributing

1. Fork the repository

2. Create a feature branch

3. Commit changes

4. Push branch

5. Open a Pull Request

Example:
git checkout -b feature/new-feature
git commit -m "Added new feature"
git push origin feature/new-feature

📄 License

Licensed under the MIT License.

📧 Contact

- GitHub: @Kavush

- Email: alfredesther141@gmail.com 

🌟 Future Roadmap

- Full authentication system

- MongoDB integration

- Video lessons

- Discussion forums

- Mobile app (React Native)

- Offline mode (PWA)

AI-powered learning assistant

Empowering Youth. Building Skills. Creating Opportunity. Made with ❤️ for SDG 8 – Decent Work & Economic Growth.
