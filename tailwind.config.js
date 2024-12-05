/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //primary: "#00D1A0", // Teal (Primary)
        primary: "#007683",
        secondary: "#00c9ff",
        accent: "#f6f5ae",
        dark: "#2c3e50",
        light: "#f3f3f3",
        blueHighlight: "#00f5e1",

        background: {
          dark: "#192734", // Dark Mode Background
          light: "#FFFFFF", // Light Mode Background
        },
        input: {
          dark: "#2E4057", // Input field in Dark Mode
          light: "#F5F5F5", // Input field in Light Mode
        },
        text: {
          dark: "#FFFFFF", // Text for Dark Mode
          light: "#1E1E2F", // Text for Light Mode
        },
        accent2: {
          blue: "#63E6E6", // Accent Light Blue
        },
        muted: "#E0E0E0", // Muted Gray
        shadow: "rgba(0, 0, 0, 0.3)", // Shadow color
      },
    },
  },
  plugins: [],
};
