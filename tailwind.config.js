/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: { 
      sm: '375px',
      md: '1080px'
    },
    colors: {
      VeryDarkBlue: 'hsl(243, 87%, 12%)',
      DesaturatedBlue: 'hsl(238, 22%, 44%)',
      BrightBlue: 'hsl(224, 93%, 58%)',
      ModerateCyan: 'hsl(170, 45%, 43%)',
      LightGrayishBlue: 'hsl(240, 75%, 98%)',
      LightGray: 'hsl(0, 0%, 75%)',
      White: 'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily: {
        sans:['Open Sans', 'sans-serif'],
        sans2: ['Raleway', 'sans-serif']
      },
      fontSize: {
        xss: ['0.5rem'],
        xss2: ['0.6rem']
      },
      fontWeight: {
        xbold: ['1000']
      }
    },
  },
  plugins: [],
}

