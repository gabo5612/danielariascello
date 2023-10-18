/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerDesktop': "url('/assets/headerDesktop.png')",
        'headerMobile': "url('/assets/headerMobile.png')",
        'aboutMe': "url('/assets/aboutme.png')",
        'aboutMe1': "url('/assets/aboutme1.png')",
        'aboutMe2': "url('/assets/aboutme2.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'nextConcertbg':"url('/assets/proximosconciertos.jpg')"
      },
      colors:{
        'primary-black':'#050206',
        'primary-white':'#F4F4F4',
        'secunday':'#948174',
        'dark':'#191919',
        'gradiant1':'#9481744A',
        'gradiant2':'#050206CC',
        'gradiant3':'#050206'
      },
      fontFamily:{
        lora:['var(--font-lora)']
      }
    },
  },
  plugins: [],
}
