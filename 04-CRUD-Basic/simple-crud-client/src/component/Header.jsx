import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="border border-blue-400 rounded-2xl mb-5 text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:underline text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:underline text-white">About</Link></li>
                        <li><Link to="/contact" className="hover:underline text-white">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;