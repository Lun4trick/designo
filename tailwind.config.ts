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
        'Jost': ["Jost", "sans-serif"]
      },

      colors: {
        'peach': '#E7816B',
        'black': '#1D1C1E',
        'light-peach': '#FFAD9B',
        'dark-gray': '#333136',
        'light-gray': '#F1F3F5',
      },

      backgroundImage: {
        'ham-open': 'url("/img/Hamburger-button-open.svg")',
        'ham-close': 'url("/img/Hamburger-button-close.svg")',
        'intro-bg-mobile': 'url("/img/intro-bg-mobile.svg")',
      }
    },
  },
  plugins: [],
};
export default config;
