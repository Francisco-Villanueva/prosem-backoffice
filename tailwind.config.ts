import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#49B88C",
        black: "#333333",
        "light-dark": "#818181",
        "dark-green": "#004225",
        "light-white": "#EFEFEF",
        error: "#FF0000",
      },
    },
  },
  plugins: [],
};
export default config;
