import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const companyData = [
    { id: 1, title: 'Web Developer', time: '10 hrs ago', location: 'Canada', desc: 'Requires an experienced web developer proficient in modern technologies.', company: 'Line Co.' },
    { id: 2, title: 'Rust Developer', time: 'Now', location: 'Remote', desc: 'Seeking Rust developer with 5+ years of experience to build secure systems.', company: 'Astrix' },
    { id: 3, title: 'UX Designer', time: '1 day ago', location: 'Hong Kong', desc: 'UX designer needed for fast-paced environment with creative projects.', company: 'Ph 1.' },
    { id: 4, title: 'Data Scientist', time: '3 days ago', location: 'USA', desc: 'Data scientist required to analyze large datasets and generate insights.', company: 'TechSoft' },
];

const Companies = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [jobTypeFilter, setJobTypeFilter] = useState("");

    // Filtered data based on search and filter criteria
    const filteredCompanies = companyData.filter(({ title, location }) => {
        return (
            title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (locationFilter ? location === locationFilter : true) &&
            (jobTypeFilter ? title.toLowerCase().includes(jobTypeFilter.toLowerCase()) : true)
        );
    });

    const handleApplyClick = () => {
        navigate('/apply');
    };

    return (
        <div className="py-12 px-6 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Search and Filter Section */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Search by job title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 w-full md:w-1/3 rounded-lg border border-gray-300"
                    />
                    <select
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="p-3 w-full md:w-1/4 rounded-lg border border-gray-300"
                    >
                        <option value="">All Locations</option>
                        <option value="Canada">Canada</option>
                        <option value="Remote">Remote</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="USA">USA</option>
                    </select>
                    <select
                        value={jobTypeFilter}
                        onChange={(e) => setJobTypeFilter(e.target.value)}
                        className="p-3 w-full md:w-1/4 rounded-lg border border-gray-300"
                    >
                        <option value="">All Job Types</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Data Scientist">Data Scientist</option>
                    </select>
                </div>

                {/* Company Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCompanies.map(({ id, title, time, location, desc, company }) => (
                        <div key={id} className="group w-full p-6 bg-white rounded-lg hover:bg-blue-600 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl font-semibold text-gray-800 group-hover:text-white flex items-center">
                                    <FaBriefcase className="mr-2 text-blue-600 group-hover:text-white" />
                                    {title}
                                </h1>
                                <span className="flex items-center text-gray-500 gap-1">
                                    <BiTimeFive /> {time}
                                </span>
                            </div>
                            <h6 className="text-gray-500 mt-2 flex items-center">
                                <MdLocationOn className="mr-1 text-gray-500" />
                                {location}
                            </h6>
                            <p className="text-sm text-gray-600 mt-4 border-t pt-4 group-hover:text-white">
                                {desc}
                            </p>
                            <div className="flex items-center gap-3 mt-4">
                                <AiOutlineShop className="text-gray-500" />
                                <span className="text-sm text-gray-700 group-hover:text-white">{company}</span>
                            </div>
                            <button 
                                onClick={handleApplyClick}
                                className="mt-6 bg-blue-600 text-white w-full py-3 rounded-md font-semibold group-hover:bg-white group-hover:text-blue-600 transition-all"
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Companies;
