import { useState, useContext } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import {
  adjustBrightness,
  fontLuminosity,
} from "../../../Helpers/functionHelpers";
import chroma from "chroma-js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import PaletteShades from "./PaletteShades";
// import { UIContext } from "../../../Context/AppContext";

function Palette({ initialHighlight = 0, colors, paletteName }) {
  const [highlighted, setHighlighted] = useState(initialHighlight);

  return (
    <Container
      disableGutters
      sx={{
        display: "grid",
        gridTemplateRows: "80px 60px",
        gap: "10px",
        // border: 2,
      }}
    >
      <PaletteShades colors={colors} initialHighlight={initialHighlight} />
      {/* <Box sx={{ border: 1, width: 1, height: 1 }}>hi</Box> */}

      <Button
        sx={{
          backgroundColor: "background.secondary",
          // border: 2,
          "&:hover": {
            ".moreButton": {
              backgroundColor: `${chroma(colors[highlighted]).darken(1)}`,
              color: `${fontLuminosity(chroma(colors[highlighted]).darken(1))}`,
            },
            boxShadow: 2,
            backgroundColor: colors[highlighted],
            // color: `${fontLuminosity(colors[highlighted])}`,
            color: `${adjustBrightness(colors[highlighted])}`,
          },
        }}
      >
        <Typography variant='heading1' sx={{ width: 1, fontWeight: 600 }}>
          {paletteName}
        </Typography>
        <MoreHorizIcon
          className='moreButton'
          sx={{
            height: "25px",
            width: "25px",
            maxHeight: 1,
            borderRadius: "50%",
          }}
        />
      </Button>
    </Container>
  );
}

export default Palette;
