import React from 'react';
import { BookOpen, Award, TrendingUp, Lock } from 'lucide-react';

const ProgressDashboard = ({ courses, userProgress, completedCourses }) => {
  const startedCount = Object.values(userProgress).filter(p => p > 0).length;
  const completedCount = completedCourses.length;
  const overallProgress = Math.round((completedCount / courses.length) * 100);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Journey</h2>
        <p className="text-gray-600">Track your progress across all courses</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
          <BookOpen size={32} className="mb-3" />
          <div className="text-3xl font-bold mb-1">{startedCount}</div>
          <div className="text-sm opacity-90">Courses Started</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-white">
          <Award size={32} className="mb-3" />
          <div className="text-3xl font-bold mb-1">{completedCount}</div>
          <div className="text-sm opacity-90">Courses Completed</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
          <TrendingUp size={32} className="mb-3" />
          <div className="text-3xl font-bold mb-1">{overallProgress}%</div>
          <div className="text-sm opacity-90">Overall Progress</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold mb-6">Course Progress</h3>
        <div className="space-y-4">
          {courses.map(course => {
            const progress = userProgress[course.id] || 0;
            const isStarted = progress > 0;

            return (
              <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{course.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{course.title}</h4>
                      <p className="text-sm text-gray-600">{course.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-600">{progress}%</div>
                    <div className="text-xs text-gray-600">{course.modules} modules</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${course.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {!isStarted && (
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <Lock size={14} className="mr-1" />
                    Not started yet
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;