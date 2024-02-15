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
    // MuiButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       height: "40px",
    //       padding: "10px",
    //       borderRadius: "5px",
    //       fontWeight: 500,
    //       fontSize: "16px",
    //       lineHeight: "20px",
    //       [mobile]: { fontSize: "17px" },
    //       // fontFamily: fonts.Montserrat,
    //       fontFamily: fonts.Poppins,

    //       // overflow: "hidden",
    //     },
    //   },
    //   variants: [
    //     {
    //       props: { variant: "primary" },
    //       style: {
    //         backgroundColor: palettes.fontColor.primary,
    //         color: palettes.fontColor.secondary,
    //         // border: "1.5px solid",
    //         // borderColor: palettes.primary.main,
    //         // color: "#fff",
    //         border: "1.5px solid",
    //         borderColor: palettes.fontColor.primary,

    //         "&:hover": {
    //           // opacity: 0.8,
    //           backgroundColor: "transparent",
    //           color: palettes.fontColor.primary,
    //         },

    //         // [lg]: { padding: "1rem" },
    //       },
    //     },
    //     {
    //       props: { variant: "secondary" },
    //       style: {
    //         border: "1.5px solid",
    //         borderColor: palettes.fontColor.primary,
    //         color: palettes.fontColor.primary,

    //         // [lg]: { padding: "1rem" },
    //       },
    //     },
    //   ],
    // },

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
      styleOverrides: {
        // Name of the slot
        root: {
          // color: palettes.fontColor.primary,
          fontFamily: fonts.Poppins,
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
  fontSize: "26px",
  lineHeight: "44px",
  textAlign: "center",

  // fontSize: { xxs: "16px", xs: "18px", mobile: "22px", sm: "24px" },
  // lineHeight: { xxs: "26px", xs: "28px", mobile: "32px", sm: "36px" },

  // [xs]: { fontSize: "18px", lineHeight: "28px", color: "green" },
  // [mobile]: { fontSize: "22px", lineHeight: "32px", color: "blue" },
  // [mobile]: { fontSize: "20px", lineHeight: "32px" },
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

appTheme.typography.label = {
  // fontFamily: fonts.Poppins,
  fontWeight: 400,
  // color: "navy",
  fontSize: "20px",
  lineHeight: "30px",
};

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
