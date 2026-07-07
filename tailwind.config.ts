import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#058bb8",
        "on-primary": "#ffffff",
        "primary-container": "#007ea7",
        "on-primary-container": "#fbfcff",
        "secondary": "#426375",
        "on-secondary": "#ffffff",
        "secondary-container": "#c2e5fa",
        "on-secondary-container": "#466779",
        "tertiary": "#864f00",
        "tertiary-container": "#a76508",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#fffbff",
        "background": "#f6fafd",
        "on-background": "#171c1f",
        "surface": "#f6fafd",
        "on-surface": "#171c1f",
        "surface-variant": "#dfe3e6",
        "on-surface-variant": "#3e484e",
        "outline": "#6f787f",
        "outline-variant": "#bec8cf",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f4f7",
        "surface-container": "#eaeef2",
        "surface-container-high": "#e4e9ec",
        "surface-container-highest": "#dfe3e6",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
        "sm": "0.125rem"
      },
      spacing: {
        "container-max": "1280px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "gutter": "24px",
        "unit": "8px",
        "section-gap": "48px"
      },
      fontFamily: {
        "headline": ["EB Garamond", "serif"],
        "display": ["EB Garamond", "serif"],
        "body": ["Hanken Grotesk", "sans-serif"],
        "label": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-md": ["28px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-sm": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": ["11px", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "700" }]
      }
    }
  },
  plugins: [
    forms,
    containerQueries
  ],
};
export default config;
