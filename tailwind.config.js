module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/cave.jpg')",
        mainBottom: "url('./images/celebration.jpg')",
        header2: "url('./images/header2.jpg')",
      },
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "540px" },
        // => @media (max-width: 639px) { ... }
        xsm: { max: "375px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
