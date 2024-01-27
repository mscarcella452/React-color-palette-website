import { useState } from "react";
import { Paper, Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { useToggle } from "../../../Hooks/CustomHooks";

const palettes = [
  {
    paletteName: "Tropical Sunset",
    colors: ["#FF5733", "#FFC300", "#DAF7A6", "#FF5733", "#FFC300"],
  },
  {
    paletteName: "Midnight Serenade",
    colors: ["#3498DB", "#9B59B6", "#2E4053", "#E74C3C", "#F39C12"],
  },
  {
    paletteName: "Ocean Breeze",
    colors: ["#1ABC9C", "#2ECC71", "#3498DB", "#9B59B6", "#34495E"],
  },
  {
    paletteName: "Autumn Bliss",
    colors: ["#D35400", "#FF5733", "#F39C12", "#C0392B", "#6C3483"],
  },
];

function PaletteShowcase({ contentIndex }) {
  return (
    <Paper
      variant='featurePaper'
      sx={{ position: "relative", backgroundColor: "#333" }}
    >
      <Container>
        <Grid container columns={{ xxs: 1, md: 2 }}>
          {palettes.map(({ paletteName, colors }) => (
            <Grid items xxs={1} sx={{ padding: 5 }}>
              {/* <Palette colors={colors} paletteName={paletteName} /> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}

export default PaletteShowcase;
