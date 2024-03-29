import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        radial: "url('/image-background-radial.png')",
        eclipse: "/void-eclipse.svg",
      },
      colors: {
        "void-primary-black": "#0C0C0F",
        "void-custom-dark-400": "#08090A",
        "void-custom-dark-300": "#18191F",
        "void-custom-dark-200": "#101114",
        "void-custom-dark-100": "#343642",
        "void-graphite": "#30333D",
        "void-grey-900": "#505566",
        "void-grey-800": "#484D5C",
        "void-grey-700": "#484B5C",
        "void-grey-400": "#282B33",
        "void-grey-300": "#202229",
        "void-grey-200": "#181A1F",
        "void-grey-100": "#1A1C21",
        "void-blue": "#0E45EB",
        "void-orange": "#F68026",
        "void-white-900": "#969799",
        "void-white-400": "#C8C9CC",
        "void-white-300": "#D2D3D6",
        "void-white": "#F0F1F5",
        "void-soft-white": "#f0f4ff",
        darkblue: {
          100: "#101114",
          200: "#040405",
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
