module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,css}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: false,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
