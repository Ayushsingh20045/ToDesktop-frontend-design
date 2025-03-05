/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.html", "./src/**/*.js"], // Correct path
  theme: {
    extend: {
      fontFamily:{
        'inter':["Inter","serif"],
        'poppins':['Poppins','serif']
      },
      colors:{
        'primary':"#3255EB"
      }
    },
  },
  plugins: [],
};
