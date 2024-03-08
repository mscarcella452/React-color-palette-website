import React from "react";
import {
  Paper,
  Box,
  useMediaQuery,
  Container,
  Typography,
  Button,
} from "@mui/material";
import {
  xxs,
  md,
  mobileLandscape,
  mobilePortrait,
  iphone4,
} from "../../../Theme/mediaQueries";
import FormDialog from "../../AuthenticationForm/FormDialog";
import HomeLogo from "../HomeLogo.png";

const logo =
  "https://i.pinimg.com/originals/63/f9/d1/63f9d1256f25a77e6c94c90c097ad96a.png";
const logo3 =
  "https://static.vecteezy.com/system/resources/previews/001/192/275/original/rainbow-dot-color-swatches-png.png";
const logo2 =
  "http://clipart-library.com/images_k/paint-clipart-transparent/paint-clipart-transparent-19.png";

function HeroSection() {
  const largerScreen = useMediaQuery(md);
  return (
    <Paper
      className='flexRow'
      sx={{
        height: "calc(100vh - 70px)",
        backgroundColor: "primary.dark",
        // backgroundColor: "primary.main",
        padding: { xxs: "2rem 1rem", xs: "2rem 1.5rem", mobile: "2rem" },

        [mobileLandscape]: {
          height: "fit-content",
          minHeight: { xxs: "calc(100vh - 70px)", lg: "600px" },
        },
        [mobilePortrait]: {
          height: "fit-content",
          minHeight: { xxs: "calc(100vh - 70px)", mobile: "650px" },
        },
      }}
    >
      <Container
        maxWidth={true}
        sx={{
          width: 1,
          height: 1,
          // border: 1,
          maxWidth: "lg",
          // border: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: ".75fr 1fr", lg: ".6fr 1fr" },
          gap: 8,

          // [mobilePortrait]: {
          //   // gap: "1rem",
          //   // justifyContent: "space-around",
          //   height: "fit-content",
          //   minHeight: "375px",
          // },
        }}
      >
        <Box
          sx={{
            // border: 1,
            aspectRatio: 1,
            width: 1,
            order: -1,
            display: { xxs: "none", md: "block" },

            backgroundImage: `url(${logo3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            position: "relative",
            "&:after": {
              // content: "''",
              position: "absolute",
              top: 100,
              left: 100,
              right: 100,
              bottom: 100,
              backgroundImage: `url(${logo3})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            },
          }}
        ></Box>
        <Box
          className='flexColumn'
          sx={{
            height: 1,
            width: 1,
            gap: { xxs: "2rem", xs: "3rem" },
            // border: 1,
          }}
        >
          <Typography
            variant='heading3'
            color='#fff'
            sx={{
              textAlign: { xxs: "center", md: "left" },
              fontWeight: 400,
              fontSize: { xxs: "50px", lg: "70px" },
              lineHeight: { xxs: "70px", lg: "80px" },
              "& .emphasize": {
                color: "secondary.main",
                textTransform: "uppercase",
                fontWeight: 700,
              },
            }}
          >
            Life's too short for{" "}
            <span className='emphasize'>boring colors</span>!
          </Typography>
          <Typography
            variant='subHeading2'
            color='background.primary'
            sx={{
              textAlign: { xxs: "center", md: "left" },

              fontWeight: 500,
              // display: { xxs: "block", md: "none", lg: "block" },
              // fontSize: { xxs: "16px", xs: "18px", mobile: "20px", sm: "24px" },
              // lineHeight: {
              //   xxs: "28px",
              //   xs: "30px",
              //   mobile: "32px",
              //   sm: "36px",
              // },
            }}
          >
            Mix, match, and perfect your ideal color palette for your next
            project. Color your world your way!
          </Typography>
          <Box
            className='flexRow'
            sx={{
              width: 1,
              gap: { xxs: "1rem", xs: "1.5rem", mobile: "1rem" },
              flexDirection: { xxs: "column", sm: "row" },
              justifyContent: { xxs: "center", md: "flex-start" },
            }}
          >
            <FormDialog
              variant='Sign Up'
              buttonLabel={" Create A Free Account"}
            />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default HeroSection;
