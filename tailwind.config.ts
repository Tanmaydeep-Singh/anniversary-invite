import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--color-obsidian)",
        ivory: "var(--color-ivory)",
        silver: "var(--color-silver)",
        stone: "var(--color-stone)",
        charcoal: "var(--color-charcoal)",
        champagne: "var(--color-champagne)",
      },
      fontFamily: {
        display: "var(--font-cormorant)",
        body: "var(--font-manrope)",
      },
    },
  },
  plugins: [],
};

export default config;
