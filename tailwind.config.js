/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brown: {
          50: '#fdf0e8',
          75: '#fae1d1',
          100: '#f2a778',      
          150: '#ed8545',
          200: '#1f1e1a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
