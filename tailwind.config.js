/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgRadial: 'radial-gradient(circle, rgba(2,48,40,1) 0%, rgba(5,14,45,1) 100%)',
        bgText: 'linear-gradient( 92.7deg,  rgba(200,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );'
      },
      fontSize: {
        '12xl': '12rem',
        '10xl': '10rem',
      }
    },
  },
  plugins: [],
}

