const greyLight = "#f7f6f6";
const greyMid = "#ebebeb";

const lightBlue = "#3d8af7";
const midRed = "#c70039";

const colors = {
  primary: "#F3E0D7",
  secondary: "#D7E1EB",
  // info: "#EA552A",
  info: "#6C64FF",
  highlight: "#d7f3e0",
  background: "#F8F8F8",
  fonts: { primary: "#000000", secondary: "#FFFFFF" },
};

const palettes = {
  background: {
    primary: colors.background,
  },
  fontColor: {
    primary: colors.fonts.primary,
    // secondary: colors.fonts.secondary,
    secondary: "#36454F",
    // secondary:
    // white:
    // black:
  },
  primary: {
    // light: will be calculated from palette.primary.main,
    main: colors.primary,
    // fontColor:
  },
  secondary: {
    // light: will be calculated from palette.primary.main,
    main: colors.secondary,
    // fontColor:
  },
  info: {
    main: colors.info,
    // fontColor:
  },
  highlight: {
    main: colors.highlight,
    // fontColor:
  },
};

export { palettes };
