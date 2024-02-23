// import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ColorPalette from "../../ColorPalettes/ColorPalette";

function PaletteGrid({ palettes, children }) {
  const minimum = useMediaQuery("(min-width: 900px)");

  return (
    <Grid
      container
      maxWidth={"lg"}
      columns={{ xxs: 1, mobile: 2, sm: minimum ? 3 : 2 }}
      sx={{
        width: 1,
        padding: "10px",
        margin: "auto",
        minHeight: "calc(100vh - 150px)",
        height: "max-content",
        alignContent: palettes.length > 0 ? "flex-start" : "center",
        position: "relative",
      }}
    >
      {palettes.map(palette => (
        <Grid className='flexRow' xxs={1} sx={{ padding: "10px" }}>
          <ColorPalette palette={palette} />
        </Grid>
      ))}
      {children}
    </Grid>
  );
}

export default PaletteGrid;
