import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

const AcademicDetails = () => {
  const [qualification, setQualification] = useState('');
  const [institution, setInstitution] = useState('');
  const [year, setYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="academic-details bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Academic Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Highest Qualification</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your qualification"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Institution</label>
          <input
            type="text"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your institution"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Year of Passing</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter year"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      <CSSTransition in={submitted} timeout={300} classNames="dropdown" unmountOnExit>
        <div className="mt-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg text-center">
          <p className="font-medium">Your academic details have been successfully submitted!</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AcademicDetails;
