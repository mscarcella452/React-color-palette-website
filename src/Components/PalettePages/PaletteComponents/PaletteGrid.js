import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Palette from "./Palette";

function PaletteGrid({ palettes }) {
  return (
    <Container disableGutters sx={{ height: "max-content", padding: "0 1rem" }}>
      <Grid container columns={{ xxs: 1, sm: 2, md: 3, lg: 3 }}>
        {palettes.map(({ colors, paletteName }, index) => (
          <Grid
            className='flexRow'
            xs={1}
            sx={{
              height: {
                xxs: "fit-content",
                mobile: "175px",
                lg: "240px",
              },
              padding: "0 1rem 2rem 1rem",
            }}
          >
            <Palette colors={colors} paletteName={paletteName} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PaletteGrid;
