import { useContext } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Palette from "./Palette";
// import { UIContext } from "../../../Context/AppContext";

function PaletteGrid({ palettes }) {
  return (
    <>
      <Grid container columns={{ xxs: 1, sm: 2, md: 3, lg: 3 }}>
        {palettes.map(({ colors, paletteName }) => (
          <Grid className='flexRow' xs={1} sx={{ padding: "0 1rem 2rem 1rem" }}>
            <Palette colors={colors} paletteName={paletteName} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PaletteGrid;
