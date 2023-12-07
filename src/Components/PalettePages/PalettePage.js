import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import SearchBar from "./PaletteComponents/SearchBar";
import { colorPalettes } from "./SeedColors";
import PaletteGrid from "./PaletteComponents/PaletteGrid";

function PalettePage() {
  return (
    <Paper variant='paperPage'>
      <Navbar />
      <Box
        className='flexColumn'
        sx={{
          padding: "2rem",
          top: "70px",
          width: 1,
          position: "sticky",

          zIndex: 1,
          background: "#fff",
        }}
      >
        <Container disableGutters sx={{ flexDirection: "column", gap: "1rem" }}>
          <Typography variant='heading1' sx={{ width: 1, fontWeight: 600 }}>
            Palettes:
          </Typography>
          <SearchBar />
        </Container>
      </Box>

      <PaletteGrid palettes={colorPalettes} />
    </Paper>
  );
}

export default PalettePage;
