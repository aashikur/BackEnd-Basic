import { useState } from "react";
import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import ToggleLightDark from "../ui/ToggleLightDark";
import { FcGoogle } from "react-icons/fc";
const Header = () => {
    const Logo = <img className=" w-8 sm:w-10 rounded-full overflow-hidden p-0" src="https://img.freepik.com/premium-vector/black-silhouette-logo-design-letter-c-with-white-background_743291-174.jpg" alt="" />

    const profile_icon = 'https://avatars.githubusercontent.com/u/46211523?v=4';

    const [isMenuOpen, setMenuOpen] = useState(false);

    // Mock user (replace with actual auth)
    const user = false;

    return (
        <header className="bg-base-100 shadow-md py-1 sticky top-0 z-50">

            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
                {/* 1. Logo */}
                <div className="text-xl font-bold w-12">
                    {Logo}
                </div>

                {/* 2. Navigation */}
                <nav className="flex gap-6">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <Link to="/coffee" className="hover:text-primary">Coffee</Link>
                    <Link to="/add-coffee" className="hover:text-primary">Add Coffee</Link>
                </nav>

                {/* 3. Theme Toggle */}
                <div className="flex space-x-4">
                    <ToggleLightDark />

                    {/* 4. Auth Section */}
                    {!user ? (
                        <div className="flex items-center gap-2">
                            <span className="hidden lg:inline hover:text-blue-600 cursor-pointer">Login</span>
                            <button className="btn btn-outline border-gray-400/80 btn-sm">
                                <FcGoogle />Sign In
                            </button>
                        </div>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 rounded-full">
                                    <img src={user.photoURL || profile_icon} alt="User" title={user.displayName || 'User'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                                <li><a className="py-2">Profile</a></li>
                                <li ><a className="py-2">My Tasks</a></li>
                                <li><button className="text-red-500 py-2">Logout</button></li>
                            </ul>
                        </div>
                    )}

                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between px-4 py-2">
                {/* Left: Burger + Logo */}
                <div className="flex items-center gap-3">
                    <button onClick={() => setMenuOpen(true)} className="text-2xl">
                        <FiMenu />
                    </button>
                    <div className="text-lg font-bold">{Logo}</div>
                </div>

                {/* Right: Theme Toggle + Auth */}
                <div className="flex items-center gap-3">
                    <ToggleLightDark />
                    {!user ? (
                        <button className="btn btn-sm btn-outline">Login</button>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 rounded-full">
                                    <img src={user.photoURL || profile_icon} alt="User" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                                <li><a className="py-2">Profile</a></li>
                                <li ><a className="py-2">My Tasks</a></li>
                                <li><button className="text-red-500 py-2">Logout</button></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-base-100 z-50 flex flex-col p-6">
                    <button onClick={() => setMenuOpen(false)} className="self-end text-xl">✕</button>
                    <nav className="flex flex-col gap-4 mt-6 text-lg">
                        <Link className="hover:text-primary border-b-1 border-gray-300" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link className="hover:text-primary border-b-1 border-gray-300" to="/coffee" onClick={() => setMenuOpen(false)}>Coffee</Link>
                        <Link className="hover:text-primary border-b-1 border-gray-300" to="/add-coffee" onClick={() => setMenuOpen(false)}>Add Coffee</Link>
                        {!user ? (
                            <button className="btn btn-outline w-full mt-4 border-r-gray-500"> <FcGoogle /> SignUp with Google</button>
                        ) : ''}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
