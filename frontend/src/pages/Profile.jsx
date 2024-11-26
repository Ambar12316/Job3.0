import React, { useState } from 'react';
import BasicDetails from './Profile/BasicDetails';
import AcademicDetails from './Profile/AcademicDetails';
import WorkExperience from './Profile/WorkExperience';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('basicDetails');

  const renderSection = () => {
    switch (activeSection) {
      case 'basicDetails':
        return <BasicDetails />;
      case 'academicDetails':
        return <AcademicDetails />;
      case 'workExperience':
        return <WorkExperience />;
      default:
        return <BasicDetails />;
    }
  };

  return (
    <div className="profile-container min-h-screen bg-gray-100 py-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="flex border-b">
          <button
            className={`flex-1 py-2 px-4 text-center ${activeSection === 'basicDetails' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveSection('basicDetails')}
          >
            Basic Details
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${activeSection === 'academicDetails' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveSection('academicDetails')}
          >
            Academic Details
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${activeSection === 'workExperience' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveSection('workExperience')}
          >
            Work Experience
          </button>
        </div>
        <div className="p-6">{renderSection()}</div>
      </div>
    </div>
  );
};

export default Profile;
