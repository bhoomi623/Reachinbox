module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Include all JS and JSX files in the src directory
    './public/index.html',          // Include the main HTML file
  ],
  theme: {
    extend: {},                      // You can extend Tailwind's default theme here
  },
  plugins: [
    require('@tailwindcss/forms'),   // Adds form styles
    require('@tailwindcss/typography'), // Adds typography styles
  ],
};


