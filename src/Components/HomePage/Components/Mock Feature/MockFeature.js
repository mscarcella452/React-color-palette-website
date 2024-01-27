import React from "react";
import { Paper, Container, Box, Typography } from "@mui/material";
import exampleMockFeature from "./exampleMockFeature.png";

function MockFeature() {
  return (
    <Paper
      className='flexColumn'
      variant='featurePaper'
      sx={{ backgroundColor: "#fff" }}
    >
      <Container
        className='flexColumn'
        // maxWidth={true}
        sx={{
          width: 1,
          height: { xxs: "fit-content", md: "400px" },
          display: { xxs: "flex", md: "grid" },
          gridTemplateColumns: "1fr .85fr",
          gap: { xxs: "3rem", md: "2rem" },
        }}
      >
        <img
          src={exampleMockFeature}
          style={{ width: "100%", maxWidth: "700px" }}
        />
        <Box
          className='flexColumn'
          sx={{
            gap: "20px",
            order: { xxs: -1, md: 1 },
          }}
        >
          <Typography
            variant='subHeading1'
            sx={{
              width: 1,
              textAlign: "left",
              fontWeight: 600,
            }}
          >
            Your Palette. Your Vision.
          </Typography>
          <Typography variant='subHeading2'>
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
