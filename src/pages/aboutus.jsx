import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">JOB3.0</span>! Our mission is to revolutionize the placement process by bringing transparency, security, and reliability to students, recruiters, and institutions. By harnessing the power of blockchain, we have developed a decentralized application (dApp) that ensures each step of the placement process is traceable and tamper-proof.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Traditional placement systems often lack transparency, leading to challenges in tracking application statuses, validating credentials, and verifying candidate information. JOB3.0 was designed to address these challenges by offering a decentralized platform where every action is securely recorded and cannot be altered, ensuring trust among all stakeholders.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          With our blockchain-based approach, we aim to provide students with a fair and transparent platform to showcase their skills, recruiters with reliable and verified candidate information, and institutions with a robust and trustworthy placement management system. We are committed to creating a future where the placement process is equitable, efficient, and secure for everyone involved.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed text-center font-semibold">
          Join us in building a transparent and secure placement ecosystem with JOB3.0!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

