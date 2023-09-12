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
        cinzel: ["Cinzel", "serif"],
        mont: ["Montserrat", "sans-serif"],
        libre: ["Libre Franklin", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        navy: "rgb(13, 48, 86)",
        "navy-light": "#7DA1C4",
        "cool-gray": "#97999B",
        "cool-gray-light": "#D0D0CE",
        gold: "rgb(202,162,60)",
        black: "#25282A",
        "faded-white": "rgba(152, 152, 152, 0.30)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        boat: "url('https://nicholas-e-wagner.com/main/wide-boat.jpg')",
        entertainment:
          "url('https://nicholas-e-wagner.com/main/entertainment.jpg')",
        dining: "url('https://nicholas-e-wagner.com/main/dining.jpg')",
        interior: "url('https://nicholas-e-wagner.com/main/interior.jpg')",
        bahamas:
          "url('https://nicholas-e-wagner.com/destinations/Bahamas.jpg')",
        "virgin-islands":
          "url('https://nicholas-e-wagner.com/destinations/VirginIslands.jpg')",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
