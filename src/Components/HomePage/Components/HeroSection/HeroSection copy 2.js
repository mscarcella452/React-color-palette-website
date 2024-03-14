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
} from "../../../../Theme/mediaQueries";
import FormDialog from "../../../AuthenticationForm/FormDialog";

const logo =
  "https://i.pinimg.com/originals/63/f9/d1/63f9d1256f25a77e6c94c90c097ad96a.png";
const logo3 =
  "https://static.vecteezy.com/system/resources/previews/001/192/275/original/rainbow-dot-color-swatches-png.png";
const logo2 =
  "http://clipart-library.com/images_k/paint-clipart-transparent/paint-clipart-transparent-19.png";

const texture =
  "https://www.transparenttextures.com/patterns/diagonal-striped-brick.png";

function HeroSection() {
  const largerScreen = useMediaQuery(md);
  return (
    <Paper
      className='flexRow'
      elevation={0}
      sx={{
        backgroundColor: "primary.dark",
        padding: { xxs: "2rem .5rem", sm: 4 },

        minHeight: {
          xxs: "fit-content",
          xs: "450px",
          // sm: "500px",
          // md: "calc(100vh - 70px)",
        },
        [mobileLandscape]: {
          minHeight: { xxs: "fit-content", sm: "400px", md: "600px" },
        },
        [iphone4]: { height: "calc(100vh - 70px)", padding: ".5rem" },
        position: "relative",

        // border: 1,

        // "&:before": {
        //   content: "''",
        //   position: "absolute",
        //   width: 1,
        //   height: 1,
        //   backgroundImage: `url(${texture})`,
        //   backgroundSize: "150px",
        //   backgroundPosition: "center",
        //   opacity: 0.25,

        //   // backgroundRepeat: "no-repeat",
        // },
      }}
    >
      <Container
        // maxWidth={"lg"}
        sx={{
          zIndex: 1,
          width: 1,
          height: 1,
          maxWidth: { xxs: "sm", md: "lg" },
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: ".6fr 1fr", lg: ".5fr 1fr" },
          gap: 8,
        }}
      >
        <Box
          sx={{
            // aspectRatio: 1,
            height: 1,
            width: 1,
            order: -1,
            // border: 1,
            display: { xxs: "none", md: "block" },

            backgroundImage: `url(${logo3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            // position: "relative",
            // "&:after": {
            //   // content: "''",
            //   position: "absolute",
            //   top: 100,
            //   left: 100,
            //   right: 100,
            //   bottom: 100,
            //   backgroundImage: `url(${logo3})`,
            //   backgroundSize: "contain",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            // },
          }}
        ></Box>
        <Box
          className='flexColumn'
          sx={{
            height: 1,
            width: 1,
            gap: { xxs: 6, sm: 4 },
            // border: 1,
          }}
        >
          <Typography
            variant='heading1'
            textAlign={{ xxs: "center", md: "left" }}
          >
            Life's too short for{" "}
            <span className='emphasize'>boring colors!</span>
          </Typography>
          <Typography
            variant='subHeading'
            textAlign={{ xxs: "center", md: "left" }}
            // sx={{ fontWeight: 500 }}
          >
            {/* Mix, match, and perfect your ideal color palette for your next
            project. */}
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
