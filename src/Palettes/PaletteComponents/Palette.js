import { useState, useContext } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

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
        gridTemplateColumns: "1fr",
        gridTemplateRows: "80px 50px",
        gap: "10px",
      }}
    >
      <PaletteShades colors={colors} initialHighlight={initialHighlight} />
      <PaletteInfo infoProps={{ colors, highlighted, paletteName }} />
    </Container>
  );
}

export default Palette;

function PaletteInfo({ infoProps }) {
  const { colors, highlighted, paletteName } = infoProps;
  return (
    <Button
      sx={{
        backgroundColor: "#fff",
        height: 1,
        border: "1.5px solid #F0F0F0",
        "&:hover": {
          ".moreButton": {
            backgroundColor: "info.main",
            color: "#fff",
          },
        },
      }}
    >
      <Typography
        variant='label'
        sx={{
          width: 1,
          textAlign: "Left",
          textTransform: "capitalize",
          color: "#36454F",
        }}
      >
        {paletteName}
      </Typography>
      <MoreHorizIcon
        className='moreButton'
        sx={{
          height: "25px",
          width: "25px",
          maxHeight: 1,
          borderRadius: "50%",
          color: "fontColor.primary",
        }}
      />
    </Button>
  );
}
