🚀 SkillUp – Youth Empowerment Learning Platform

A modern skill-building web app designed to empower unemployed youth by giving them access to practical courses and digital skills — contributing directly to SDG 8: Decent Work and Economic Growth.

🎯 Project Overview

SkillUp is a full-stack learning platform that helps youth gain employable skills through structured courses, progress tracking, and downloadable certificates.
Built with a clean UI, responsive design, and scalable architecture.

🌟 Key Features
📚 Course Library

6+ curated learning tracks across:

Tech

Marketing

Business

Design

Customer Service

Finance

📊 Progress Tracking

Module-by-module progress

Visual dashboards

Course completion percentages

🏆 Certificates

Auto-generated certificates

Personalized with learner name

Downloadable as image/PDF

🎨 Modern UI/UX

Built with TailwindCSS

Smooth animations

Clean, responsive layout

👤 User Management

Registration & login

Local persistence (saved in localStorage)

Personal dashboard

🛠️ Tech Stack
Frontend

React + Vite

Tailwind CSS

Lucide Icons

Axios (API calls)

Backend

Node.js + Express

Local JSON data (future upgrade: MongoDB)

Build Tools

Vite

PostCSS

ES Modules

📦 Installation & Setup
Prerequisites

Node.js v16+

Git

🔧 Setup Instructions
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

Site runs at:
👉 http://localhost:5173/

Backend runs at:
👉 http://localhost:5000/

📁 Project Structure
skillup-app/
│
├── backend/                    # Backend API
│   ├── server.js               # Express server
│   └── data/                   # Sample course/user data
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseModal.jsx
│   │   ├── CertificateCard.jsx
│   │   ├── ProgressDashboard.jsx
│   │   └── Navigation.jsx
│   │
│   ├── services/               # API layer (axios)
│   │   ├── courseService.js
│   │   └── userService.js
│   │
│   ├── App.jsx                 # Main app logic
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind imports
│
├── vite.config.js
├── postcss.config.cjs
├── package.json
└── README.md

🎓 Available Courses

Web Development Basics

Digital Marketing

Data Analysis (Excel)

Graphic Design (Canva)

Customer Service

Financial Literacy

Each course includes:

Duration

Modules

Skills you’ll gain

Description

Icon + theme color

🚀 How to Use
1️⃣ Register

Enter your details to create your learner profile.

2️⃣ Browse Courses

Explore a variety of skill tracks.

3️⃣ Start Learning

Click any course to open its modules.

4️⃣ Track Progress

Your progress is saved automatically.

5️⃣ Earn Certificates

Download a personalized certificate once the course is complete.

🎨 Customization
➕ Add a new course

Edit:
src/data/courses.js (or backend data file depending on your version)
{
  id: 7,
  title: "New Skill Course",
  duration: "4 weeks",
  modules: 8,
  icon: "🚀",
  skills: ["Skill 1", "Skill 2"],
  color: "from-blue-500 to-teal-500",
  description: "Course description…"
}

📱 Responsive Design

Optimized for:
✔ Mobile
✔ Tablet
✔ Desktop
✔ Large screens

🤝 Contributing

Fork repository

Create a feature branch

Commit changes

Push branch

Open a Pull Request

Example:
git checkout -b feature/new-feature
git commit -m "Added new feature"
git push origin feature/new-feature

📄 License

Licensed under the MIT License.

📧 Contact

GitHub: @Kavush

Email: support@skillup.com

🌟 Future Roadmap

 Full authentication system

 MongoDB integration

 Video lessons

 Discussion forums

 Mobile app (React Native)

 Offline mode (PWA)

 AI-powered learning assistant

Empowering Youth. Building Skills. Creating Opportunity.
Made with ❤️ for SDG 8 – Decent Work & Economic Growth.