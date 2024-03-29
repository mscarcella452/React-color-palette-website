import React from "react";
import { Paper, Container, Box, Typography } from "@mui/material";
import exampleMockFeature from "./exampleMockFeature.png";
import mockDashboard from "./mockDashboard.png";

const mockImage = "https://clipart-library.com/image_gallery2/Laptop.png";

function MockFeature() {
  return (
    <Box
      className='flexColumn'
      eleavtion={0}
      // variant='featurePaper'
      sx={{
        backgroundColor: "#fff",
        // backgroundColor: "info.dark",
        backgroundColor: "background.primary",
        // padding: { xxs: "2rem 1rem", sm: "2rem", lg: 6 },
      }}
    >
      <Container
        className='flexColumn'
        // maxWidth={true}
        sx={{
          width: 1,
          minHeight: { xxs: 600, md: 450 },
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr .5fr" },
          gridTemplateRows: { xxs: "1fr .5fr", md: "1fr" },
          gap: { xxs: 2, md: 4 },

          // borderRadius: "30px 30px 0 0 ",
        }}
      >
        <Box
          sx={{
            height: { xxs: "400px", sm: 1 },
            width: 1,
            backgroundImage: `url(${mockImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            // border: 1,
          }}
        />

        <Box
          className='flexColumn'
          sx={{
            gap: "20px",
            width: 1,
            // display: "none",
            // border: 1,
            height: 1,
            // order: { xxs: -1, md: 1 },
          }}
        >
          <Typography
            variant='heading1'
            sx={{
              width: 1,
              textAlign: { xxs: "center", md: "left" },
              color: "fontColor.primary",
              fontWeight: { xxs: 400, md: 400 },
              "& .emphasize": {
                fontWeight: { xxs: 700, md: 700 },
              },

              // color: "background.secondary",
            }}
          >
            your palette. <span className='emphasize'>Your Vision.</span>
          </Typography>
          <Typography
            variant='subHeading'
            maxWidth={"md"}
            sx={{
              textAlign: { xxs: "center", sm: "left" },
              color: "info.dark",
              display: "none",

              lineHeight: 2,
            }}
          >
            With an intuitive interface and a diverse color wheel, you can
            effortlessly mix and match hues, creating unique combinations
            tailored to your artistic style.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default MockFeature;
