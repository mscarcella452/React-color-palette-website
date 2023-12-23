import { useState, useContext } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

import {
  adjustBrightness,
  fontLuminosity,
} from "../../../Helpers/functionHelpers";
import chroma from "chroma-js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { UIContext } from "../../../Context/AppContext";

const appPalette = ["#a2d4e6", "#8ac5d1", "#6eaaaf", "#547b8b", "#415a6b"];

function PaletteLogo({ initialHighlight = 2 }) {
  const [highlighted, setHighlighted] = useState(initialHighlight);

  return (
    <Grid
      container
      columns={12}
      sx={{
        width: 1,
        height: 1,
        maxWidth: { xxs: "275px", sm: "325px" },
        overflow: "hidden",
        borderRadius: "2.5px",
        // boxShadow: 2,
      }}
    >
      {appPalette.map((color, index) => (
        <Grid
          xxs={highlighted === index ? 8 : 1}
          // xxs={highlighted === index ? 6 : 6 / (appPalette.length - 1)}
          onClick={() => setHighlighted(index)}
          sx={{
            backgroundColor: color,

            transition: "all .5s ease-in-out",
            // paddingBottom: "2.5px",
            overflow: "hidden",
            position: "relative",
            cursor: highlighted !== index && "pointer",

            // "&:after": {
            //   content: "''",
            //   position: "absolute",
            //   bottom: 0,
            //   left: 0,
            //   right: 0,
            //   height: "2.5px",
            //   width: 1,
            //   backgroundColor: `${chroma(color).darken(1.5)}`,
            // },
          }}
        >
          <Box
            className='flexRow'
            sx={{
              transition: "all .25s ease-in-out",
              height: 1,
              width: 1,

              // padding: "10px",
              transform:
                highlighted === index
                  ? "translate(0)"
                  : highlighted < index
                  ? "translateX(-300px)"
                  : "translateX(300px)",
            }}
          >
            <Button
              className='flexRow'
              sx={{
                color: `${adjustBrightness(color)}`,
                width: 0.9,

                // height: "30px",
                height: 0.8,

                padding: 0,
                "&:hover": {
                  backgroundColor: `${chroma(color).darken(1)}`,
                  color: `${fontLuminosity(chroma(color).darken(1))}`,
                },
              }}
            >
              <Typography
                variant='heading1'
                className='flexRow'
                sx={{
                  fontWeight: 600,
                  height: 1,
                  fontSize: "1.5rem",
                  // textTransform: "lowercase",
                }}
              >
                PaletteCraft
              </Typography>
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default PaletteLogo;
