import React from "react";
import { Paper, Container, Box, Typography } from "@mui/material";
import exampleMockFeature from "./exampleMockFeature.png";

const mockImage = "https://clipart-library.com/image_gallery2/Laptop.png";

function MockFeature() {
  return (
    <Paper
      className='flexColumn'
      // variant='featurePaper'
      sx={{
        backgroundColor: "#fff",
        backgroundColor: "info.dark",
        backgroundColor: "background.secondary",
        padding: { xxs: "2rem 1rem", sm: "2rem", lg: 6 },
      }}
    >
      <Container
        className='flexColumn'
        // maxWidth={true}
        sx={{
          width: 1,
          height: { xxs: "fit-content", md: 400 },
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", sm: "1fr 1fr" },
          gridTemplateRows: { xxs: "1fr .75fr", sm: "1fr" },
          gap: { xxs: "2rem", sm: "3rem" },

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
            // border: 1,
            height: 1,
            // order: { xxs: -1, md: 1 },
          }}
        >
          <Typography
            variant='heading3'
            sx={{
              width: 1,
              textAlign: { xxs: "center", sm: "left" },
              color: "fontColor.primary",
              fontWeight: 300,

              // color: "background.secondary",
            }}
          >
            your palette. <span className='emphasize'>Your Vision.</span>
          </Typography>
          <Typography
            variant='p'
            maxWidth={"md"}
            sx={{
              textAlign: { xxs: "center", sm: "left" },
              color: "fontColor.primary",

              lineHeight: 2,
              fontWeight: 300,
            }}
          >
            With an intuitive interface and a diverse color wheel, you can
            effortlessly mix and match hues, creating unique combinations
            tailored to your artistic style.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default MockFeature;
