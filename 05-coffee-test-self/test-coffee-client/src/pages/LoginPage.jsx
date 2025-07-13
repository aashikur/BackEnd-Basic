import React from 'react';

const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded shadow max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded dark:bg-gray-700 dark:text-gray-100"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded dark:bg-gray-700 dark:text-gray-100"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-6 flex flex-col items-center">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;