/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
      backgroundImage: {
        aside: "url('/assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        primary: {
          marineBlue: "hsl(213, 96%, 18%)",
          purplishBlue: "hsl(243, 100%, 62%)",
          PastelBlue: "hsl(228, 100%, 84%)",
          LightBlue: "hsl(206, 94%, 87%)",
          StrawberryRed: "hsl(354, 84%, 57%)",
        },
        secondary: {
          coolGray: "hsl(231, 11%, 63%)",
          lightGray: "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
