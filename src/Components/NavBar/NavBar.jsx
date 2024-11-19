import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (<div className="pt-[8rem]">
        <div className="navbar flex justify-between items-center py-[2rem] px-[4rem] bg-white shadow-md fixed top-0 left-0 w-full z-50">
            {/* Logo Section */}
            <div className="logoDiv">
                <h1 className="logo text-[32px] font-bold text-blue-600 tracking-wide px-5">
                    JOBS <span className="text-black">3.0</span>
                </h1>
            </div>

            {/* Navigation Links */}
            <div className="menu flex gap-10">
                <Link to="/companies">
                    <li className="menuList list-none text-[21px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Jobs
                    </li>
                </Link>
                <Link to="/blog">
                    <li className="menuList list-none text-[21px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Announcements
                    </li>
                </Link>
                <Link to="/aboutus">
                    <li className="menuList list-none text-[21px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        About us
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="menuList list-none text-[21px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Contact
                    </li>
                </Link>
            </div>

            {/* Login & Register Buttons */}
            <div className="authButtons flex gap-4">
                <Link to="/login">
                    <li className="menuList list-none text-[21px] font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                        Login
                    </li>
                </Link>
                <Link to="/register">
                    <li className="menuList list-none text-[21px] font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                        Register
                    </li>
                </Link>
            </div>
        </div> </div>
    );
};

export default NavBar;