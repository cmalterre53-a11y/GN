import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchemin: "#F5ECD8",
        sable: "#EAD9B8",
        nav: "#EFE0C0",
        brun: "#3D2008",
        or: "#C4964A",
        "or-moyen": "#9B6E20",
        "brun-clair": "#5A3010",
        "brun-lien": "#8B5E1A",
        footer: "#2A1204",
        "footer-text": "#F0DFB8",
        placeholder: "#DEC8A0",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        eb: ['"EB Garamond"', "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
