/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'heroMobile' : "url('/src/images/mobile/image-hero.jpg')"
      }
    },
    colors : {
      white : 'hsl(0, 0%, 100%)',
      black : 'hsl(0, 0%, 0%)',
      DarkGrey : 'hsl(0, 0%, 55%)',
      VeryDarkGrey : 'hsl(0, 0%, 41%)'
    },
    fontFamily : {
      Alata : "'Alata', 'sans-serif'",
      JosefinSans: "'Josefin Sans', 'sans-serif'",
    }
    
  },
  
  plugins: [],
}
