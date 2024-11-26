import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

const BasicDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="basic-details bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-2xl max-w-lg mx-auto mt-12 transition-all duration-300">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center animate-pulse">Basic Details</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <label className="block text-gray-800 font-semibold text-lg">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm text-gray-800 placeholder-gray-500 transition"
            placeholder="Enter your name"
          />
        </div>

        <div className="relative">
          <label className="block text-gray-800 font-semibold text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm text-gray-800 placeholder-gray-500 transition"
            placeholder="Enter your email"
          />
        </div>

        <div className="relative">
          <label className="block text-gray-800 font-semibold text-lg">Upload Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />
          {image && (
            <div className="mt-4 flex justify-center">
              <img
                src={image}
                alt="Profile"
                className="w-36 h-36 object-cover rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition-all"
          >
            Submit
          </button>
        </div>
      </form>

      <CSSTransition in={submitted} timeout={300} classNames="dropdown" unmountOnExit>
        <div className="mt-8 bg-green-50 border-l-4 border-green-500 text-green-800 p-5 rounded-lg text-center animate-fade-in">
          <p className="font-medium text-lg">Your profile has been successfully submitted!</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default BasicDetails;
