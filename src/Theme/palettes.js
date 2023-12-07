const greyLight = "#f7f6f6";
const greyMid = "#ebebeb";

const lightBlue = "#3d8af7";
const midRed = "#c70039";

const palettes = {
  background: {
    primary: "#fff",
    secondary: greyLight,

    fontColor: {
      primary: "#333",
      // secondary:
      // white:
      // black:
    },
  },
  primary: {
    // light: will be calculated from palette.primary.main,
    main: lightBlue,
    // fontColor:
  },
  secondary: {
    // light: will be calculated from palette.primary.main,
    main: midRed,
    // fontColor:
  },
  info: {
    main: greyMid,
    // fontColor:
  },
};

export { palettes };
