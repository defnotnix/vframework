export const configThemeMantineMain: any = {
  // * COLORS & SHADES
  colors: {
    brand: [
      "#f4f5fb", // 50
      "#e8eaf6", // 100
      "#cbd4ec", // 200
      "#9eafdb", // 300
      "#6a85c6", // 400
      "#4765b0", // 500
      "#354e94", // 600
      "#2c3f78", // 700
      "#283764", // 800
      "#263154", // 900
    ],
  },
  primaryColor: "brand",
  primaryShade: {
    light: 6,
    dark: 5,
  },
  autoContrast: true,
  luminanceThreshold: 0.5,

  // white : "#ffffff"
  // black : "#000000"

  // * FONTS
  fontFamily: `"Outfit", sans-serif`,
  fontSmoothing: true,

  headings: {
    fontFamily: `"Host Grotesk", serif`,
    sizes: {
      h1: { fontSize: "36" },
    },
  },
};
