import React from "react";

const Apply = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-800">Game Backend Developer</h1>
                <p className="text-lg text-gray-600 mt-2">Octro Inc | Noida | Full Time</p>
                <p className="text-green-600 font-semibold mt-2">Applied</p>
                <p className="text-sm text-gray-600">You applied with resume: <strong>FullStack_New</strong>. <span className="text-blue-600 cursor-pointer">Change</span></p>

                <hr className="my-4" />

                {/* Job Details */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Opening Overview</h3>
                    <p><strong>Category:</strong> General</p>
                    <p><strong>Job Functions:</strong> Information Technology</p>
                    <p><strong>Job Profile CTC:</strong> ₹ 800000 per Annum</p>
                    <p><strong>Other Info:</strong></p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Stipend: 25,000/- PM till the course completion, CTC post training 8.0 LPA (including 1.5L VCTC)</li>
                        <li>Joining: January 2025 (As Trainee), July 2025 (As Full Time role)</li>
                    </ul>
                </div>

                <hr className="my-4" />

                {/* Job Description */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Job Description</h3>
                    <p className="text-gray-700 mt-2">
                        About Octro: Octro is a new age platform that aims to create leisure options for the world at large. Octro's vision is to keep creating moments of joy in human life while creating best and scalable leisure options. Headquartered in India, and funded by Sequoia, Octro is the largest and the fastest growing global mobile gaming company with leadership in Card, Casino & Casual games across the portfolio. Some 200M+ players have played these games 150B+ times. For the last few years, games in our portfolio have ranked consistently on India top 10 on AppAnnie/SensorTower for Player Revenue.
                    </p>
                    <p className="text-blue-600 cursor-pointer mt-2">Show More</p>
                </div>

                <hr className="my-4" />

                {/* Additional Information */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Required Skills</h3>
                    <p className="text-gray-600 mt-2">No skills added for this job profile</p>
                </div>

                <hr className="my-4" />

                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
                    <p className="text-gray-600 mt-2">No Additional Information added for this job profile</p>
                </div>

                <hr className="my-4" />

                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Attached Documents</h3>
                    <p className="text-gray-600 mt-2">No Documents attached for this job profile</p>
                </div>

                {/* Upload Resume Button */}
                <div className="mt-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                        Upload Resume
                    </label>
                    <input
                        type="file"
                        id="resume"
                        className="block w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Apply;
