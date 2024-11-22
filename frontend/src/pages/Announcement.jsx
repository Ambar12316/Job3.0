import React, { useState } from "react";
const Announcement = () => {
  const [announcements] = useState([
    { id: 1, type: "Pre-Placement Talk", text: "Pre-placement talks for PwC on Dec 1." },
    { id: 2, type: "Online Test", text: "Online test for Deloitte scheduled for Nov 20." },
    { id: 3, type: "Offline Test", text: "Offline test for BlackRock on Dec 5." },
    { id: 4, type: "Shortlist", text: "Shortlisted students for Xiaomi 1st Technical Round." },
    { id: 5, type: "Shortlist", text: "Shortlisted students for ZS 2nd Technical Round." },
    { id: 6, type: "Personal Interview", text: "List of students for PI at Intel." },
    { id: 7, type: "Selection", text: "Qualcomm selected students announcement." },
    { id: 8, type: "Interview Tips", text: "Tips for interview preparation from Infosys." },
    { id: 9, type: "Pre-Placement Talk", text: "Pre-placement talks for Google on Dec 10." },
    { id: 10, type: "Result", text: "Results for Amazon SDE Online Test released." },
  ]);
  const [filters, setFilters] = useState([]);
  const toggleFilter = (type) => {
    setFilters((prevFilters) =>
      prevFilters.includes(type)
        ? prevFilters.filter((filter) => filter !== type)
        : [...prevFilters, type]
    );
  };
  const filteredAnnouncements = announcements.filter(
    (announcement) => !filters.includes(announcement.type)
  );
  const announcementTypes = [...new Set(announcements.map((a) => a.type))];
  return (
    <div className="announcement-container p-6">
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      
      {/* Filter Section */}
      <div className="filter-section mb-6 bg-gray-100 py-2 px-4 rounded-lg shadow-md ">
        <h3 className="text-xl font-bold mb-2">Filters:</h3>
        <div className="filters flex flex-wrap gap-4 ">
          {announcementTypes.map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                checked={filters.includes(type)}
                onChange={() => toggleFilter(type)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-lg">{type}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Announcements List */}
      <div className="announcement-list">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="announcement-item p-4 mb-4 border rounded-md shadow-sm bg-white"
            >
              <p className="text-lg font-medium">{announcement.text}</p>
              <span className="text-sm text-gray-500 italic">{announcement.type}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No announcements to display.</p>
        )}
      </div>
    </div>
  );
};
export default Announcement;