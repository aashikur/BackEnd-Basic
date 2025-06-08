import React from 'react';
import { Link, Navigate, NavLink } from 'react-router';

const Header = () => {
    return (
        <div className="bg-base-300">
            <div className="max-w-7xl mx-auto">
                <nav className='flex justify-between items-center py-4'>
                    <h1 className='uppercase text-2xl'>Coffee</h1>
                    <ul className='flex gap-3 text-lg '>
                        <NavLink className='active' to="/">Home</NavLink>
                        <NavLink to="/addcoffee">Add Coffee</NavLink>
                        <NavLink to="/updatecoffee">Update Coffee</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;