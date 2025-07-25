import React, { useState, useEffect } from "react";

const ToggleLightDark = () => {

    // ✅ Initialize theme from localStorage (on first render)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });


    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleToggleLightDark = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <button className="btn btn-circle">
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox"
                    onClick={handleToggleLightDark}
                />
                {/* sun icon */}
                <svg
                    className="swap-on w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                    className="swap-off w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
        </button>
    );
};

export default ToggleLightDark;



// ## General Install Tailwind Css and DaisyUI
// # Short Guide 
// 1. use ToggleLightDark.jsx for default light and toggle dark mode
// 2. to Control dark mode Color -> Use " Method 1 "



// # Add(NO-NEED) tailwind.config.js file 
// <!-- // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [], // No daisyUI here for v5
// }; -->

// # for Toggle we used ToggleLightDark.jsx 
//  it will switch between light and dark mode 
//  and data-theme attribute need to be triggered (included in jsx)

// ## Tricks is => 3 in index.css file after calling and DaisyUI

// 1. General Toggle will do most of the work
// 2. For Customize Controls u can use either Enable Dark: method or Customize theme 

// ## /* Method 1 : Dark Mode Toggle dark:class */
// ## /* ======================================================================= */
// @plugin "daisyui" {
//   themes: light --default, dark --prefersdark;
// }
// @custom-variant dark (&:where([data-theme=dark ], [data-theme=dark] *));

// # /* ======================================================================= */






// ## /* Method 2 : Theme Color : Custom Class */
// ## ======================================================================= */
// @plugin "daisyui/theme" {
//   name: "light";
//   --color-custom-red: green;
// }
// @plugin "daisyui/theme" {
//   name: "dark";
//   --color-custom-red: blue;
// }
// # /* ======================================================================= */
