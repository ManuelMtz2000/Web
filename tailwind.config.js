module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
    },
    extend: {
      colors: {
        BgPurple: '#6D51A8',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyFrames: {
        fadeIn: {
          "0%": {opacity: 0 },
          "100%": { opacity: 1 },
        }
      }
    },
  },
  variants: {
    extend: {},
    animation: ["motion-safe"],
  },
  plugins: [],
}
