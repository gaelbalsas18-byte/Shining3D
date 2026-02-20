import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tokuyama: {
          red: "#20b150",
        },
      },
    },
  },
  plugins: [],
};

export default config;
