import { useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import PaletteList from "../../Helpers/PaletteList/PaletteList";

function TemplatePage({ palettes }) {
  return (
    // {/* <Typography variant='subHeading1'>Template Palettes</Typography> */}
    <PaletteList palettes={palettes} />
  );
}

export default TemplatePage;
