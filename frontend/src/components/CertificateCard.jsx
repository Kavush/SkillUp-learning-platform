import React from 'react';
import { Award, Star, CheckCircle, Download } from 'lucide-react';

const CertificateCard = ({ course, userName, onDownload }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border-2 border-gray-100 overflow-hidden">
      <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <Award size={40} />
          <Star size={32} className="text-yellow-300" />
        </div>
        <h3 className="text-xl font-bold mb-2">Certificate of Completion</h3>
        <p className="text-sm opacity-90">SkillUp Platform</p>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-1">This certifies that</div>
          <div className="text-2xl font-bold text-gray-900 mb-3">{userName}</div>
          <div className="text-sm text-gray-600 mb-1">has successfully completed</div>
          <div className="text-lg font-semibold text-gray-900">{course.title}</div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <CheckCircle size={16} className="text-green-500" />
          <span>{course.modules} modules completed</span>
        </div>

        <button
          onClick={onDownload}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-indigo-700 transition"
        >
          <Download size={20} />
          <span>Download Certificate</span>
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;