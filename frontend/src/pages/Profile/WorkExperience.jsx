import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

const WorkExperience = () => {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [years, setYears] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="work-experience bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Work Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Company Name</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your role"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Years of Experience</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter years"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      <CSSTransition in={submitted} timeout={300} classNames="dropdown" unmountOnExit>
        <div className="mt-6 bg-purple-100 border border-purple-300 text-purple-700 p-4 rounded-lg text-center">
          <p className="font-medium">Your work experience has been successfully submitted!</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default WorkExperience;
