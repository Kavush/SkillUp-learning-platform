import React from 'react';
import { Award } from 'lucide-react';

const Header = ({ userName, completedCount, totalCount }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and User Info */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">SU</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SkillUp
              </h1>
              <p className="text-sm text-gray-600">
                Welcome back, <span className="font-semibold text-gray-800">{userName}</span>!
              </p>
            </div>
          </div>
          
          {/* Progress and Award */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm text-gray-600">Course Progress</div>
              <div className="text-lg font-bold text-indigo-600">
                {completedCount}/{totalCount} completed
              </div>
            </div>
            
            <div className="relative">
              <Award 
                className="text-yellow-500" 
                size={32} 
                fill="currentColor"
              />
              {completedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {completedCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar - Optional */}
        {totalCount > 0 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Overall Progress</span>
              <span>{Math.round((completedCount / totalCount) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Default props for safety
Header.defaultProps = {
  userName: 'Learner',
  completedCount: 0,
  totalCount: 0
};

export default Header;