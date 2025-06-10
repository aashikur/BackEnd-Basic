import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className="bg-base-200 min-h-[70vh] flex items-center justify-center py-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Sign Up</h1>
                <p className="text-gray-500 mb-8 text-center">Create your account to get started.</p>
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Age</label>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="Enter your age"
                            min="1"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Profile Picture URL</label>
                        <input
                            type="url"
                            className="input input-bordered w-full"
                            placeholder="Paste your profile picture URL"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition mb-4"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-base-300"></div>
                    <span className="mx-3 text-gray-400 text-sm">or</span>
                    <div className="flex-grow border-t border-base-300"></div>
                </div>
                <button
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition mb-4"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Sign up with Google
                </button>
                <p className="text-center text-gray-500 text-sm">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-amber-600 font-semibold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;