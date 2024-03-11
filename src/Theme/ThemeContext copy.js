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
        // Name of the slot
        root: {
          // Some CSS
          // overflow: "hidden",
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
            // padding: "4rem 2rem",
            gap: "4rem",
            [xxs]: { padding: "3rem 0rem" },
            [xs]: { padding: "4rem 1rem" },
            [mobile]: { padding: "4rem 2rem" },
            // borderBottom: "1.25px solid",
            // borderTop: "1.25px solid",
            // borderColor: "#efefef",
            // border: "1px solid #333",
            backgroundColor: palettes.background.primary,
          },
        },
        // {
        //   props: { variant: "featurePaper" },
        //   style: {
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     width: "100%",
        //     [xxs]: { height: "fit-content", padding: "3rem 1.5rem" },
        //     [md]: { height: "calc(100vh - 70px)", padding: "3rem 2rem" },
        //     // padding: "3rem 1.5rem",
        //     backgroundColor: palettes.background.primary,
        //   },
        // },
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
            display: "grid",

            gap: "2rem",

            [xxs]: {
              gridTemplateColumns: "1fr",
              gridTemplateRows: "300px auto",
            },
            [sm]: { gridTemplateRows: "375px auto" },
            [md]: { gridTemplateColumns: "1fr .5fr", gridTemplateRows: "1fr" },
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

          fontSize: "14px",
          height: "35px",
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
            color: palettes.background.secondary,

            backgroundColor: "#4B46B2",
            // color: palettes.background.primary,

            // border: "solid 1px",
            borderColor: "#27245D",

            "&:hover": {
              backgroundColor: "#4B46B2",
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

    MuiDivider: {
      styleOverrides: {
        // Name of the slot
        root: {},
      },
      variants: [
        {
          props: { variant: "vertical" },
          style: typographyVariants.label,
        },
      ],
    },

    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // color: palettes.fontColor.primary,
          // fontFamily: fonts.Poppins,
          fontFamily: fonts.Montserrat,
        },
      },
      defaultProps: {
        variantMapping: {
          // mainTitle: "h1",
          heading1: "h1",
          heading2: "h2",
          heading3: "h3",
          subHeading1: "h4",
          subHeading2: "h5",
          boldLabel: "p",
          label: "p",
          p: "p",
          tinyLabel: "p",
        },
      },
      variants: [
        {
          props: { variant: "label" },
          style: { fontSize: typographyVariants.label.fontSize },
        },
      ],
    },
  },
});

// appTheme.typography.mainTitle = {
//   // fontFamily: fonts.Poppins,
//   fontWeight: 700,
//   textAlign: "center",
//   color: "red",
//   fontSize: "45px",
//   lineHeight: "55px",

//   [xs]: { fontSize: "55px", lineHeight: "65px", color: "tan" },
//   [mobile]: { fontSize: "65px", lineHeight: "75px", color: "tan" },
//   [sm]: { fontSize: "75px", lineHeight: "85px", color: "tan" },
//   [md]: { fontSize: "80px", lineHeight: "90px", color: "green" },

//   //  PORTRAIT
//   // [mobilePortrait]: {
//   //   [appTheme.breakpoints.only("xxs")]: {
//   //     fontSize: "45px",
//   //     lineHeight: "55px",
//   //     color: "blue",
//   //   },
//   // },
// };

appTheme.typography.heading1 = {
  fontWeight: 700,
  // color: "blue",
  // color: "red",
  fontSize: "45px",
  lineHeight: "55px",

  [xs]: { fontSize: "55px", lineHeight: "65px" },
  [mobile]: { fontSize: "65px", lineHeight: "75px" },
  [sm]: { fontSize: "75px", lineHeight: "85px" },
  [md]: { fontSize: "80px", lineHeight: "90px" },
  width: "100%",
};

appTheme.typography.heading2 = {
  fontWeight: 600,
  // color: "teal",
  textAlign: "center",
  fontSize: "50px",
  lineHeight: "60px",
  // border: "1px solid",
  width: "100%",
  // [xs]: { fontSize: "25px", lineHeight: "35px", color: "green" },
  // [mobile]: { fontSize: "30px", lineHeight: "36px" },
  // [lg]: { fontSize: "35px", lineHeight: "40px" },
};
appTheme.typography.heading3 = {
  fontWeight: 600,
  color: "teal",
  textAlign: "left",
  fontSize: "25px",
  lineHeight: "30px",
  // border: "1px solid",
  width: "100%",
  // [xs]: { fontSize: "25px", lineHeight: "35px", color: "green" },
  [mobile]: { fontSize: "30px", lineHeight: "36px" },
  [lg]: { fontSize: "35px", lineHeight: "40px" },
};

appTheme.typography.subHeading1 = {
  fontWeight: 400,
  // color: "#36454F",

  fontSize: "20px",
  lineHeight: "32px",
  textAlign: "center",

  // fontSize: { xxs: "16px", xs: "18px", mobile: "22px", sm: "24px" },
  // lineHeight: { xxs: "26px", xs: "28px", mobile: "32px", sm: "36px" },

  // [xs]: { fontSize: "18px", lineHeight: "28px", color: "green" },
  [mobile]: { fontSize: "22px", lineHeight: "36px" },
  [sm]: { fontSize: "26px", lineHeight: "44px" },
  // [sm]: { fontSize: "24px", lineHeight: "36px" },
  // [mobile]: { textAlign: "center" },
};

appTheme.typography.subHeading2 = {
  fontWeight: 400,
  textAlign: "left",
  color: "#36454F",
  fontSize: "20px",
  lineHeight: "36px",
  width: "100%",
};

// appTheme.typography.boldLabel = {
//   fontFamily: fonts.Poppins,
//   fontWeight: 700,
//   textAlign: "center",
//   color: palettes.background.primary,
//   color: "orange",
//   fontSize: "20px",
//   lineHeight: "30px",
// };

// appTheme.typography.label = {
//   // fontFamily: fonts.Poppins,
//   fontWeight: 400,
//   // color: "navy",
//   fontSize: "14px",
//   lineHeight: "30px",

//   [xs]: { fontSize: "16px" },
//   [mobile]: { fontSize: "18px" },
//   [mobileLandscape]: {
//     [xs]: { fontSize: "16px" },
//     // [sm]: { fontSize: "16px" },
//   },
// };

appTheme.typography.tinyLabel = {
  fontWeight: 700,
  // color: "gold",
  fontSize: "40px",
  lineHeight: "55px",
};

appTheme.typography.p = {
  fontWeight: 400,
  textAlign: "left",
  // color: "indigo",
  fontSize: "17px",
  lineHeight: "27px",
};

export default appTheme;
