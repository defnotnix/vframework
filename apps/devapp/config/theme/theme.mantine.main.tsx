import { colorsTuple } from "@mantine/core";

export const configThemeMantineMain: any = {
  // * COLORS & SHADES
  colors: {
    brand: [
      "#ebaeb1", // 50
      "#e69a9d", // 100
      "#e08589", // 200
      "#db7176", // 300
      "#d65d62", // 400
      "#d1484f", // 500
      "#cc343b", // 600
      "#b82f35", // 700
      "#a32a2f", // 800
      "#8f2429", // 900
    ],
    backgroundPrimary: colorsTuple("#242424"),
    backgroundDeep: colorsTuple("#1A1A1A"),
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
