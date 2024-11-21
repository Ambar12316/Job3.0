import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className="pt-[8rem]">
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
                        <div className="menuList text-[24px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                            Jobs
                        </div>
                    </Link>
                    <Link to="/announcement">
                        <div className="menuList text-[24px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                            Announcements
                        </div>
                    </Link>
                    <Link to="/aboutus">
                        <div className="menuList text-[24px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                            About us
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="menuList text-[24px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                            Contact
                        </div>
                    </Link>
                </div>

                {/* Auth Buttons */}
                <div className="authButtons flex gap-4">
                    {isAuthenticated ? (
                        <>
                            <div className="userInfo text-[21px] font-medium text-gray-600">
                                Welcome, {user?.name}
                            </div>
                            <button
                                className="menuList text-[21px] font-medium text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer"
                                onClick={() => logout({ returnTo: window.location.origin })}
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <button
                            className="menuList text-[21px] font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                            onClick={() => loginWithRedirect()}
                        >
                            Log In
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
