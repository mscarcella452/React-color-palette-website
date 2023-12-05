import { createTheme } from "@mui/material/styles";

import { palettes } from "./palettes.js";

import breakpoints, {
  xxs,
  xs,
  mobile,
  sm,
  md,
  lg,
  mobilePortrait,
  mobileLandscape,
} from "./mediaQueries";

export const fonts = {};

const appTheme = createTheme({
  // palette: palettes,

  breakpoints: breakpoints,

  components: {
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          overflow: "hidden",
          borderRadius: 0,
        },
      },
      variants: [],
    },
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        },
      },
      variants: [],
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          heading1: "h1",
          boldLabel: "h5",
          subLabel: "p",
          tinyLabel: "p",
        },
      },
    },
  },
});

appTheme.typography.heading1 = {
  textTransform: "capitalize",
  textAlign: "left",
  fontWeight: 400,
  fontSize: "1.5rem",
  [md]: { fontSize: "1.75rem" },

  //  PORTRAIT
  [mobilePortrait]: {
    [appTheme.breakpoints.only("xxs")]: { fontSize: "10px" },
    [appTheme.breakpoints.only("xs")]: { fontSize: "12px" },
  },
  // LANDSCAPE
  [mobileLandscape]: {
    // [appTheme.breakpoints.only("xxs")]: { fontSize: "12px" },
    // [appTheme.breakpoints.only("xs")]: { fontSize: "12px" },
    // [appTheme.breakpoints.only("mobile")]: { fontSize: "1.25rem" },
  },
};

export default appTheme;
