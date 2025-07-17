import React, { useContext } from 'react';
import ToggleLightDark from '../ui/ToggleLightDark';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const location = useLocation();
//   console.log('location', location);

    const { 
        user, 
        Log_out
    } = useContext(AuthContext);
    console.log("navbar check usr:", user)

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl">FindJOB</Link>
            </div>
            <div className='flex-2'>
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to={'/applications'}>Applications List </NavLink></li> 
                   {user &&  <li><NavLink to={`/my-applications?email=${user.email}`}>My Applications</NavLink></li> }
                   {user &&  <li><NavLink to={`/add-jobs`}>Add Jobs</NavLink></li> }
                   {user &&  <li><NavLink to={`/my-posted-jobs?email=${user.email}`}>My Posted Jobs</NavLink></li> }

                </ul>
            </div>
            <div className="flex gap-5">

                <div>
                    <ToggleLightDark />
                </div>

                {!user ? (
                    <div>
                        <Link to='/register' className="btn">Register</Link>
                        <Link to='/login' className="ml-1 btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Login</Link>
                    </div>
                ) : (
                    <div className=" dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL || 'img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={() => Log_out()} className='btn btn-outline my-2'>Logout</li>
                        </ul>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Navbar;