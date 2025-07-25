/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-900": "var(--color-900)", // Dark background color
        "color-800": "var(--color-800)", // Slightly lighter background color
        "color-700": "var(--color-700)", // Medium background color
        "color-500": "var(--color-500)", // Light background color
        "color-light": "var(--color-light)", // white color
        "color-dark": "var(--color-dark)", // black color
        "color-success": "var(--color-success)", // Green for success
        "color-danger": "var(--color-danger)", // Red for error
        "color-warning": "var(--color-warning)", // Amber for warning
        "color-gray-700": "var(--color-gray-700)", // gray color
        "color-gray-500": "var(--color-gray-500)", // gray color
        "color-gray-400": "var(--color-gray-400)", // gray color
      },
      screens: {
        xs: "400px", // Extra small screens
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x large screens
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
      spacing: {
        "header-height": "var(--header-height, 60px)", // Custom header height for responsiveness
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: "1rem",
            lineHeight: "1.5",
            "@screen sm": {
              fontSize: "1.125rem",
            },
            "@screen md": {
              fontSize: "1.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], // Enables responsive typography
};


