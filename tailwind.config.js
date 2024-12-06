
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
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
        backgroundImage: {
          'hero-bg': "url('src/assets/images/webp/hero-bg-image.webp')"
        },
        lineHeight: {
          'custom-xl': '110%',
          'custom-2xl': '150%',
        },
        colors: {
          'light-blue': '#00A8E8',
        },
        fontSize: {
          'custom-xl': '64px',
          'custom-lg': '38px'
        },
      },
    },
  },
  plugins: [],
};
