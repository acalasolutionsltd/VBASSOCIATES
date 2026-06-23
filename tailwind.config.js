/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-surface": "#1A1A1A",
        "inverse-on-surface": "#F5F2ED",
        "background": "#F5F2ED",
        "surface": "#F5F2ED",
        "surface-variant": "#ECE7E0",
        "surface-container-low": "#ECE7E0",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-high": "#D7D1C9",
        "outline": "#D7D1C9",
        "outline-variant": "#D7D1C9",
        "primary": "#1F2A44",
        "on-primary": "#FFFFFF",
        "primary-hover": "#172033",
        "secondary": "#6A5A7D",
        "on-secondary": "#FFFFFF",
        "tertiary": "#B7ACC6",
        "on-surface-variant": "#6A5A7D"
      },
      fontFamily: {
        "label-caps": ["JetBrains Mono", "monospace"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Anton", "sans-serif"],
        "display-xl-mobile": ["Anton", "sans-serif"],
        "label-ui": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Anton", "sans-serif"],
        "headline-lg": ["Anton", "sans-serif"],
        "display-xl": ["Anton", "sans-serif"]
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.15em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-lg": ["20px", { lineHeight: "32px", fontWeight: "400" }],
        "headline-md": ["48px", { lineHeight: "52px", letterSpacing: "0.03em", fontWeight: "400" }],
        "display-xl-mobile": ["64px", { lineHeight: "60px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "label-ui": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "headline-lg-mobile": ["40px", { lineHeight: "44px", letterSpacing: "0.02em", fontWeight: "400" }],
        "headline-lg": ["72px", { lineHeight: "76px", letterSpacing: "0.02em", fontWeight: "400" }],
        "display-xl": ["120px", { lineHeight: "110px", letterSpacing: "-0.02em", fontWeight: "400" }]
      },
      spacing: {
        "container-max": "1440px",
        "margin-desktop": "80px",
        "gutter": "32px",
        "unit": "8px",
        "margin-mobile": "24px",
        "section-gap": "160px"
      },
      borderRadius: {
        "DEFAULT": "4px",
        "lg": "8px",
        "xl": "12px",
        "full": "9999px"
      }
    },
  },
  plugins: [],
}
