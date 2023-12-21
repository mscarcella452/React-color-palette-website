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

export const fonts = { Montserrat: "'Montserrat', sans-serif" };

const appTheme = createTheme({
  palette: palettes,

  breakpoints: breakpoints,

  components: {
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // overflow: "hidden",
          borderRadius: 0,
        },
      },
      variants: [
        {
          props: { variant: "paperPage" },
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: palettes.background.primary,
            overflowY: "auto",
          },
        },
      ],
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
          // overflow: "hidden",
        },
      },
      variants: [
        {
          props: { variant: "gridContainer" },
          style: {
            padding: ".25rem",
            overflowY: "auto",
            alignItems: "flex-start",

            // [lg]: { padding: "1rem" },
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          maxHeight: "100%",
          padding: "10px",
          borderRadius: "2.5px",
          gap: "10px",
          color: "#333",
          fontWeight: 600,
          fontFamily: fonts.Montserrat,

          // overflow: "hidden",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: palettes.primary.main,
            border: "1.5px solid",
            borderColor: palettes.primary.main,
            color: "#fff",
            "&:hover": {
              // opacity: 0.8,
              backgroundColor: palettes.primary.main,
            },

            // [lg]: { padding: "1rem" },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            border: "1.5px solid",
            borderColor: palettes.primary.main,
            color: palettes.primary.main,

            // [lg]: { padding: "1rem" },
          },
        },
      ],
    },

    MuiDivider: {
      styleOverrides: {
        // Name of the slot
        root: {},
      },
      variants: [
        {
          props: { variant: "vertical" },
          style: {
            backgroundColor: palettes.info.main,
            width: "2.5px",
            height: "100%",
            border: 0,
            borderRadius: "2.5px",
          },
        },
      ],
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
  fontFamily: fonts.Montserrat,
  textTransform: "capitalize",
  textAlign: "left",
  fontWeight: 400,
  fontSize: "18px",
  // [md]: { fontSize: "1.75rem" },

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
