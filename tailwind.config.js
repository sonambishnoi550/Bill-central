
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
        lineHeight: {
          'custom-xl': '110%',
          'custom-2xl': '150%',
      },
      fontFamily: {
        'avantt': "'avantt',sans-serif",

      },
        colors: {
          lightblue: "#00A8E8",
          prussianBlue: "#003459",
          darkblue: "#191423",
          sky: "#026070",
          lightsky:'#56E3CB'
        },
      fontSize: {
        'custom-sx': '8px',
          'custom-xl': '64px',
          'custom-lg': '38px'
        },
    },
  },
  plugins: [],
};
