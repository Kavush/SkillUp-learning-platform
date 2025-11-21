import React from 'react';
import { CheckCircle, Lock, Award } from 'lucide-react';

const CourseModal = ({ course, userProgress, completedCourses, onClose, onUpdateProgress, onDownloadCertificate }) => {
  const currentProgress = userProgress[course.id] || 0;
  const moduleProgress = Math.floor((currentProgress / 100) * course.modules);
  const isCompleted = completedCourses.includes(course.id);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{course.icon}</div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg px-3 py-1 transition"
            >
              ✕
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
          <p className="opacity-90">{course.description}</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Course Modules</h3>
            <div className="space-y-2">
              {Array.from({ length: course.modules }, (_, i) => {
                const moduleNum = i + 1;
                const isModuleCompleted = moduleNum <= moduleProgress;
                const isCurrent = moduleNum === moduleProgress + 1;

                return (
                  <button
                    key={i}
                    onClick={() => onUpdateProgress(course.id, moduleNum)}
                    disabled={moduleNum > moduleProgress + 1}
                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                      isModuleCompleted
                        ? 'border-green-500 bg-green-50'
                        : isCurrent
                        ? 'border-indigo-500 bg-indigo-50 hover:bg-indigo-100'
                        : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {isModuleCompleted ? (
                          <CheckCircle className="text-green-500" size={24} />
                        ) : isCurrent ? (
                          <div className="w-6 h-6 border-2 border-indigo-500 rounded-full" />
                        ) : (
                          <Lock className="text-gray-400" size={24} />
                        )}
                        <div>
                          <div className="font-semibold">Module {moduleNum}</div>
                          <div className="text-sm text-gray-600">
                            {isModuleCompleted ? 'Completed' : isCurrent ? 'Click to complete' : 'Locked'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {isCompleted && (
            <button
              onClick={() => {
                onDownloadCertificate(course.id);
                onClose();
              }}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-green-600 transition"
            >
              <Award size={20} />
              <span>Download Certificate</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseModal;