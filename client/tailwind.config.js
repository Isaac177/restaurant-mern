/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../client/src/**/*.{js,jsx,ts,tsx}",
    "../client/public/index.html",
    "../client/src/components/**/*.{js,jsx,ts,tsx}",
    "../client/src/views/**/*.{js,jsx,ts,tsx}",
    "../client/src/router/**/*.{js,jsx,ts,tsx}",
    "../client/src/store/**/*.{js,jsx,ts,tsx}",
    "../client/src/utils/**/*.{js,jsx,ts,tsx}",
    "../client/src/contexts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
