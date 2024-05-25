import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,tsx,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pretendard: ["Pretendard-Regular", "sans-serif"],
        dohyeon: ["BMDOHYEON", "sans-serif"],
        scoreLight: ["S-CoreDream-3Light", "sans-serif"],
        scoreRegular: ["S-CoreDream-4Regular", "sans-serif"],
        yeseva: ["Yeseva One", "sans-serif"],
        shrik: ["Shrikhand", "sans-serif"],
        ghanachocolate: ["Ghanachocolate", "sans-serif"],
        hambak: ["Hambak", "sans-serif"],
      },
      colors: {
        primary: "#ffffff",
        red_color: "#EF7373",
        blue_color: "#4561B7",
        blueLight_color: "#7792E5",
        yellow_color: "#FFC267",
        brown_color: "#DEAF8E",
        redbrown_color: "#A52A2A",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "1024px",
        // => @media (min-width: 1024px) { ... }

        lg: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    backgroundColor: ["active"],
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },
  },
  plugins: [],
};
export default config;
