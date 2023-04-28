const palette = {
  dark: "#304F6D",
  green: "#899481",
  orange: "#E07D54",
  yellow: "#FFE1A0",
  gray: "#E6E1DD",

  black: "#0B0B0B",
  white: "F0F2F3",
}

const theme = {
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    headerPrimaryBackground: palette.orange,
    cardPrimaryBackground: palette.yellow,
    buttonPrimaryBackground: palette.green,
  },
  spacing: {
    s: 8,
    m: 16, 
    l: 24,
    xl: 40,
  },
  breakpoints: {}
}

export type Theme = typeof theme;
export default theme;
