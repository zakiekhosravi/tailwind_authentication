/** @type {import('tailwindcss').Config} */
const colors = require ('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding:'2rem',
    },
    extend: {
      boxShadow:{
        glass:'inset 0 2px 22px 0 rgba(255,255,255,0.6);',
      },
      colors:{
        'gray':colors.gray
      },
    },
  },
  variants:{
    extend: {
      Animation:['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};
