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
    <Paper variant='featurePaper' sx={{ position: "relative" }}>
      <Container
        sx={{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
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
            border: "1.5px solid #F0F0F0",
          }}
        />
      </Container>
    </Paper>
  );
}

export default Feature;
