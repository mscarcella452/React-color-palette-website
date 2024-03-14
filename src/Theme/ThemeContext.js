import { createTheme } from "@mui/material/styles";

import { palettes } from "./palettes.js";

import breakpoints, {
  iphone4,
  xxs,
  xs,
  mobile,
  sm,
  md,
  lg,
  mobilePortrait,
  mobileLandscape,
} from "./mediaQueries";

export const fonts = {
  Montserrat: "'Montserrat', sans-serif",
  Poppins: " 'Poppins', sans-serif",
};

const typographyVariants = {
  label: {
    // fontFamily: fonts.Poppins,
    fontWeight: 400,
    fontSize: "14px",
    [xs]: { fontSize: "16px" },
    [mobile]: { fontSize: "18px" },
    [mobileLandscape]: {
      [xs]: { fontSize: "16px" },
      // [sm]: { fontSize: "16px" },
    },
  },
};

const appTheme = createTheme({
  palette: palettes,

  breakpoints: breakpoints,

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          overflowX: "hidden",
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
        {
          props: { variant: "pagePaper" },
          style: {
            backgroundColor: palettes.background.primary,
            position: "relative",
            height: "100vh",

            width: "100%",
            zIndex: 2,
            overscrollBehavior: "none",
          },
        },
        {
          props: { variant: "featurePaper" },
          style: {
            width: "100%",
            gap: "4rem",
            [xxs]: { padding: "3rem 0rem" },
            [xs]: { padding: "4rem 1rem" },
            [mobile]: { padding: "4rem 2rem" },
            backgroundColor: palettes.background.primary,
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
      // variants: [
      //   {
      //     props: { variant: "" },
      //     style: {
      //     },
      //   },
      // ],
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          fontSize: "14px",
          height: "35px",
          fontFamily: fonts.Montserrat,
          textTransform: "capitalize",
          // ...typographyVariants.label,
          [xs]: { height: "40px" },
          [sm]: { fontSize: "16px" },
          fontWeight: 600,

          "&:hover": {
            opacity: 0.8,
          },
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: palettes.info.main,
            color: palettes.background.secondary,

            "&:hover": {
              backgroundColor: palettes.info.main,
            },

            // [lg]: { padding: "1rem" },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            color: "#2F2E41",
            // color: palettes.info.main,
            // backgroundColor: "#2F2E41",
            backgroundColor: palettes.background.secondary,
            // backgroundColor: "#fff",

            // backgroundColor: "#4B46B2",
            // backgroundColor: "#E6E6E6",
            // color: palettes.background.primary,

            "&:hover": {
              // backgroundColor: "#fff",
              backgroundColor: palettes.background.secondary,
            },
          },
        },
        {
          props: { variant: "label" },
          style: {
            color: palettes.info.main,
            textTransform: "capitalize",
            "&:hover": {
              opacity: 1,
              textDecoration: "underline",
              background: "transparent",
            },
          },
        },
      ],
    },

    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            height: "35px",
            width: "35px",
            color: palettes.info.main,
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          padding: 0,
          width: "100%",
          height: "50px",

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#fff",
            borderColor: "#E6E6E6", // Change the outline color when focused here
            fontFamily: fonts.Montserrat,
            color: "#2F2E41",
            fontWeight: 500,
            height: "100%",
            width: "100%",
            padding: "5px",
            boxShadow: 0,
            "&:hover": {
              borderColor: "#E6E6E6", // Change the hover color here
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#E6E6E6", // Change the outline color when focused here
            },
        },
      },

      // variants: [
      //   {
      //     props: { variant: "" },
      //     style: {

      //     },
      //   },
      // ],
    },

    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // color: palettes.fontColor.primary,
          // fontFamily: fonts.Poppins,
          // fontFamily: fonts.Montserrat,

          "& .logo_alternate": {
            color: palettes.info.main,
            textTransform: "uppercase",
            fontWeight: 700,
          },
          "& .emphasize": {
            color: palettes.secondary.main,

            textTransform: "uppercase",
            fontWeight: 700,
          },
          "& .emphasize_secondary": {
            color: palettes.primary.main,
            textTransform: "uppercase",
            fontWeight: 700,
          },

          "&:hover": {
            "&.link_typography": { color: palettes.info.main },
          },
        },
      },
      defaultProps: {
        variantMapping: {
          // mainTitle: "h1",
          heading1: "h1",
          heading2: "h2",
          heading3: "h3",
          subHeading: "h4",
          label: "p",
          p: "p",
          tinyLabel: "p",
        },
      },
      // variants: [
      //   {
      //     props: { variant: "label" },
      //     style: { fontSize: typographyVariants.label.fontSize },
      //   },
      // ],
    },
  },
});

appTheme.typography.heading1 = {
  fontWeight: 600,
  fontFamily: fonts.Montserrat,
  color: palettes.fontColor.primary,
  fontSize: "45px",
  lineHeight: 1.1,
  [iphone4]: { fontSize: "35px" },
  [mobile]: { fontSize: "50px" },
  [sm]: { fontSize: "55px" },
  [md]: { fontSize: "60px" },
  [lg]: { fontSize: "65px" },
};
appTheme.typography.heading2 = {
  fontWeight: 400,
  fontFamily: fonts.Montserrat,
  color: palettes.background.primary,
  fontSize: "20px",
  lineHeight: "45px",

  [mobile]: { fontSize: "25px" },
  [sm]: { fontSize: "30px" },
  [lg]: { fontSize: "35px" },
};

appTheme.typography.heading3 = {
  fontWeight: 600,
  fontFamily: fonts.Montserrat,
  fontSize: "25px",
  [iphone4]: { fontSize: "20px" },
};

appTheme.typography.subHeading = {
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: 2,
  color: palettes.background.primary,
  [xs]: { fontSize: "20px" },
  [mobile]: { fontSize: "22px" },
  fontFamily: fonts.Poppins,
};

appTheme.typography.label = {
  fontWeight: 400,
  fontSize: "20px",
};
appTheme.typography.tinyLabel = {
  fontWeight: 300,
  fontSize: "12px",
};

appTheme.typography.p = {
  fontWeight: 400,
  textAlign: "left",
  fontSize: "18px",
  [mobile]: { fontSize: "20px" },
  lineHeight: 1.5,
  fontFamily: fonts.Montserrat,
  color: palettes.fontColor.primary,
};

export default appTheme;
