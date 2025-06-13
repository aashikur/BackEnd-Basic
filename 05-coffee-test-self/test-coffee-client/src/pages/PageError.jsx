import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router';


const PageError = () => {
    return (
        <div className='min-h-screen bg-white flex flex-col items-center justify-center max-w-200 mx-auto'>
           <img className='w-full' src="/public/assets/images/404/404.gif" alt="" />
        <div className="text-gray-700">
            <Link className='btn' to={'/'}> <BiArrowBack className="animate-bounce hover:animate-pulse" /> Back to Home</Link>
        </div>
        </div>
    );
};

export default PageError;