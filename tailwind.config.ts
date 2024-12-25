import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryDark1: "#242731",
        grayDark: "#1F2128",
        grayDark2: "#5F6165",
        grayDark3: "#72767C",
        grayDark4: "#7C7C8D",
        primaryBG: "#F3F5F8",
        grayLightBg: "#F5F5F5",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out",
      },
    },
  },
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "10px", // rounded-large
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              900: "#FF6370", // Main brand color
              foreground: "#FFFFFF",
              DEFAULT: "#FF6370",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
