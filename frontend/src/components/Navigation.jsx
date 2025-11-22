import React from 'react';
import { BookOpen, TrendingUp, Award, Home } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { 
      id: 'courses', 
      label: 'Courses', 
      icon: BookOpen,
      description: 'Browse available courses'
    },
    { 
      id: 'progress', 
      label: 'My Progress', 
      icon: TrendingUp,
      description: 'Track your learning journey'
    },
    { 
      id: 'certificates', 
      label: 'Certificates', 
      icon: Award,
      description: 'View your achievements'
    }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-current={isActive ? "page" : undefined}
                aria-label={`View ${tab.label} - ${tab.description}`}
                title={tab.description}
                className={`
                  flex items-center space-x-2 py-3 px-4 border-b-2 transition-all duration-200 
                  whitespace-nowrap rounded-t-lg min-w-max
                  ${isActive
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50 shadow-sm'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                  hover:shadow-md active:scale-95
                `}
              >
                <IconComponent 
                  size={20} 
                  className={isActive ? 'text-indigo-600' : 'text-gray-500'}
                />
                <span className="font-medium text-sm sm:text-base">{tab.label}</span>
                
                {/* Active indicator dot */}
                {isActive && (
                  <div className="w-2 h-2 bg-indigo-600 rounded-full ml-1"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile bottom navigation for smaller screens */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
          {tabs.map(tab => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={`mobile-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                aria-current={isActive ? "page" : undefined}
                className={`
                  flex flex-col items-center justify-center p-2 rounded-lg transition-all
                  ${isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600'
                  }
                `}
              >
                <IconComponent size={20} />
                <span className="text-xs mt-1 font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

// Default props for safety
Navigation.defaultProps = {
  activeTab: 'courses',
  setActiveTab: () => {}
};

export default Navigation;