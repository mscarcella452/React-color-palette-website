const greyLight = "#f7f6f6";
const greyMid = "#ebebeb";

const lightBlue = "#3d8af7";
const midRed = "#c70039";

const navbar = { nav: "#2d2c5c", menu: "#393486" };

const colors = {
  // primary: "#F3E0D7",
  primary: "#393486",
  // secondary: "#D7E1EB",
  secondary: "#FFC66C",
  // info: "#EA552A",
  info: "#6C64FF",
  // highlight: "#d7f3e0",
  // highlight: "#FFC66C",
  background: {
    primary: "#F8F8F8",
    secondary: "#ECECEC",
  },
  fonts: { primary: "#2F2E41", secondary: "#FFFFFF" },
};

const palettes = {
  background: {
    primary: colors.background.primary,
    secondary: colors.background.secondary,
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
  // highlight: {
  //   main: colors.highlight,
  //   // fontColor:
  // },
};

export { palettes };
