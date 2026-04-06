/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    \"./src/pages/**/*.{js,ts,jsx,tsx,mdx}\",
    \"./src/components/**/*.{js,ts,jsx,tsx,mdx}\",
    \"./src/app/**/*.{js,ts,jsx,tsx,mdx}\",
  ],
  theme: {
    extend: {
      colors: {
        background: \"#050505\",
        foreground: \"#ffffff\",
        card: \"#0A0A0A\",
        accent: \"#7f27ff\",
        success: \"#00E5BC\",
        warning: \"#FF9933\",
        danger: \"#FF3333\",
      },
      backgroundImage: {
        \"gradient-radial\": \"radial-gradient(var(--tw-gradient-stops))\",
        \"gradient-conic\":
          \"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))\",
        \"glass\": \"linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))\",
      },
      boxShadow: {
        \"neon\": \"0 0 20px rgba(127, 39, 255, 0.3)\",
      },
    },
  },
  plugins: [],
};
