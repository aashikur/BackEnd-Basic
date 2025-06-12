## General Install Tailwind Css and DaisyUI
# Short Guide 
1. use ToggleLightDark.jsx for default light and toggle dark mode
2. to Control dark mode Color -> Use " Method 1 "



# Add(NO-NEED) tailwind.config.js file 
<!-- // tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [], // No daisyUI here for v5
}; -->

# for Toggle we used ToggleLightDark.jsx 
 it will switch between light and dark mode 
 and data-theme attribute need to be triggered (included in jsx)

## Tricks is => 3 in index.css file after calling and DaisyUI

1. General Toggle will do most of the work
2. For Customize Controls u can use either Enable Dark: method or Customize theme 

## /* Method 1 : Dark Mode Toggle dark:class */
## /* ======================================================================= */
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
@custom-variant dark (&:where([data-theme=dark ], [data-theme=dark] *));

# /* ======================================================================= */






## /* Method 2 : Theme Color : Custom Class */
## ======================================================================= */
@plugin "daisyui/theme" {
  name: "light";
  --color-custom-red: green;
}
@plugin "daisyui/theme" {
  name: "dark";
  --color-custom-red: blue;
}
# /* ======================================================================= */
