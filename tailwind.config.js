/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        proto: "ProtoMono"
      },
      colors: {
        cardinGreen: '#0C1A1A',
        cardingGreenLight: '#1E4545',
        blackPurple: '#242050',
        darkerPurple: '#3B3486',
        lightDarkPurple: '#864AF9'
      }
    },
  },
  plugins: [],
}