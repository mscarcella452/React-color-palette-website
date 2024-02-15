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
        padding: 1,
        margin: "auto",
        minHeight: "calc(100vh - 150px)",
        height: "fit-content",
        alignContent: "center",
      }}
    >
      {palettes.map(palette => (
        <Grid className='flexRow' xxs={1} sx={{ padding: 1 }}>
          <ColorPalette palette={palette} />
        </Grid>
      ))}
      {children}
    </Grid>
  );
}

export default PaletteGrid;
