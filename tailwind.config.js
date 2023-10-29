const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./src/**/*.js",
  ],
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],
  // enable dark mode via class strategy
  darkMode: "class",
  theme: {
    maxWidth: {
      xs: "343px",
      ...defaultTheme.maxWidth,
    },
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      transitionTimingFunction: {
        "in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      },
      gridTemplateRows: {
        "collection-md": "1fr 4fr 1fr",
        collection: "repeat(8, 1fr)",
      },
      gridTemplateColumns: {
        "collection-md": "repeat(8, 1fr)",
        collection: "1fr 8fr 1fr",
        "fill-10r": "repeat(auto-fill, 2.5rem)",
        "fit-10r": "repeat(auto-fit, 2.5rem)",
        footer: "repeat(4, auto) 1fr",
        "2x1fr": "1fr 1fr",
      },

      gridRowEnd: {
        full: "-1",
      },
      height: {
        "15r": "15rem",
        "20r": "20rem",
        "25r": "25rem",
        "30r": "30rem",
        "35r": "35rem",
        "40r": "40rem",
        "45r": "45rem",
        "50r": "50rem",
        "60r": "60rem",
        "70r": "70rem",
        "80r": "80rem",
        "90r": "90rem",
      },

      width: {
        "15r": "15rem",
        "20r": "20rem",
        "25r": "25rem",
        "30r": "30rem",
        "35r": "35rem",
        "40r": "40rem",
        "45r": "45rem",
        "50r": "50rem",
        "60r": "60rem",
      },
      aspectRatio: {
        12: "12",
        18: "18",
        21: "21",
        25: "25",
        30: "30",
        31: "31",
        37: "37",
        61: "61",
        100: "100",
      },
      colors: {
        "brand-blue": "#0f1432",
        "brand-blue-50": "#ECEDEF",
        "brand-blue-100": "#DCDEE0",
        "brand-blue-200": "#BDC0C6",
        "brand-blue-400": "#8B8F9B",
        "brand-blue-600": "#5E6373",
        "brand-blue-800": "#353B4F",
        "brand-white": "#f7f7f5",
        active: "#ff6900",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "425px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "2048px",
        // => @media (min-width: 2048px) { ... }
      },
      maxWidth: {
        xs: "343px",
        sm: "393px",
        md: "704px",
        lg: "960px",
        xl: "1216px",
        "2xl": "1408px",
        "3xl": "1600px;",
      },
    },
  },
  variants: {
    extend: { aspectRatio: ["responsive", "hover"] },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
