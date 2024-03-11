import { useState } from "react";
import { Paper, Container, Typography, Box } from "@mui/material";
import FeatureContent from "./Components/FeatureContent";

import { featureData } from "./data/featureData";

const colorFreedomBenefits = [
  "Endless Choices",
  "Dynamic Palettes",
  "Instant Inspiration",
  "Effortless Exploration",
  "Precision Control",
  "Seamless Integration",
];

function Feature({ contentIndex }) {
  const { content, image } = featureData[contentIndex];

  return (
    <Paper
      variant='featurePaper'
      sx={{
        position: "relative",
        backgroundColor: "secondary.main",
      }}
    >
      <Container
        sx={{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          position: "relative",
          zIndex: 1,
          "&:before": {
            content: "''",
            position: "absolute",
            top: -40,
            left: "50%",
            // left: 300,
            bottom: -40,
            width: "60%",
            transform: "translate(-50%, 0)",
            // width: "50vh",
            borderRadius: "10px 10px",
            // backgroundColor: "primary.main",
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            // opacity: 0.25,
            zIndex: -1,
          },
        }}
      >
        <FeatureContent content={content} />
        <Box
          className='flexRow'
          sx={{
            borderRadius: "10px",
            height: 1,
            width: 1,
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundColor: "#fff",
            order: contentIndex % 2 === 1 ? -1 : 1,
            border: 1,
            borderColor: "background.secondary",
            boxShadow: 2,
            // border: "1.5px solid #F0F0F0",
          }}
        />
      </Container>
    </Paper>
  );
}

export default Feature;
