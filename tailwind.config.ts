import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        "faded-white": "rgba(152, 152, 152, 0.30)",
        "deep-blue": "rgba(0, 84, 106, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "landing-page": "url('/public/landing-page.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
