import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div className="bg-base-200 py-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between">
                    {/* Logo/Heading */}
                    <Link className="uppercase text-3xl font-bold tracking-wide text-gray-800 mb-4 md:mb-0">
                        Coffee
                    </Link>
                    {/* Navigation */}
                    <ul className="flex gap-4 text-lg font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-amber-600 underline"
                                        : "text-gray-700 hover:text-amber-600"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addcoffee"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-amber-600 underline"
                                        : "text-gray-700 hover:text-amber-600"
                                }
                            >
                                Add Coffee
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-amber-600 underline"
                                        : "text-gray-700 hover:text-amber-600"
                                }
                            >
                                Sign Up
                            </NavLink>
                        </li> */}
                    </ul>
                    {/* Order Button */}
                    <button className="ml-0 md:ml-6 mt-4 md:mt-0 px-6 py-2 rounded-full bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition">
                       <Link to={"/signin"}>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;