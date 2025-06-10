import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
    return (
        <div className="bg-base-200 min-h-[70vh] flex items-center justify-center py-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Sign In</h1>
                <p className="text-gray-500 mb-8 text-center">Welcome back! Please sign in to your account.</p>
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Type your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="Type your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition mb-4"
                    >
                        Sign In
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
                    Sign in with Google
                </button>
                <p className="text-center text-gray-500 text-sm">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-amber-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;