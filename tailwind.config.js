/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '100%',
        md: '450px',
        lg: '450px',
        xl: '500px',
        '2xl': '550px',
      },
    },
  },
  plugins: [],
};
