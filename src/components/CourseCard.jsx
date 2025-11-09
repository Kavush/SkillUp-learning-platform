import React from 'react';
import { Clock, Target, CheckCircle } from 'lucide-react';

const CourseCard = ({ course, progress, isCompleted, onStart, onContinue }) => {
  const isStarted = progress > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 overflow-hidden">
      <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
        <div className="text-4xl mb-3">{course.icon}</div>
        <h3 className="text-xl font-bold mb-1">{course.title}</h3>
        <p className="text-sm opacity-90">{course.category}</p>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 flex items-center">
              <Clock size={16} className="mr-1" />
              {course.duration}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              course.level === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
            }`}>
              {course.level}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Target size={16} className="mr-1" />
            {course.modules} modules
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-600 mb-1">Skills you'll learn:</div>
          <div className="flex flex-wrap gap-1">
            {course.skills.map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {isStarted && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="font-bold text-indigo-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {isCompleted ? (
          <button
            onClick={onContinue}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-green-600 transition"
          >
            <CheckCircle size={20} />
            <span>Completed</span>
          </button>
        ) : isStarted ? (
          <button
            onClick={onContinue}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Continue Learning
          </button>
        ) : (
          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Start Course
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;