import React from 'react';

const ThemeHeader = () => {
  return (
    <header className="bg-surface border-b border-divider">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v6c0 5.25 3.75 10 10 12s10-6.75 10-12V7l-10-5z" />
          </svg>
          <span className="text-textPrimary text-xl font-semibold">
            MyApp
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-textSecondary hover:text-primary transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-textSecondary hover:text-primary transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-textSecondary hover:text-primary transition"
          >
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center space-x-4">
          <button className="bg-primary text-background px-4 py-2 rounded-lg hover:bg-primary/80 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default ThemeHeader;
