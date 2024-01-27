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

function PaletteShades({ initialHighlight = 0, colors, transitionOff }) {
  const [highlighted, setHighlighted] = useState(initialHighlight);

  return (
    <Grid
      container
      columns={12}
      sx={{
        width: 1,
        height: 1,
        maxHeight: "80px",
        overflow: "hidden",
        borderRadius: "2.5px",
        // boxShadow: 2,
        // border: 2,
      }}
    >
      {colors.map((color, index) => (
        <Grid
          className='flexRow'
          //   xxs={highlighted === index ? 8 : 4}
          xxs={
            colors.length > 2
              ? highlighted === index
                ? 6
                : 6 / (colors.length - 1)
              : highlighted === index
              ? 8
              : 4
          }
          onClick={() => setHighlighted(index)}
          sx={{
            backgroundColor: color,

            transition: !transitionOff && "all .5s ease-in-out",
            paddingBottom: "2.5px",
            overflow: "hidden",
            position: "relative",
            cursor: highlighted !== index && "pointer",

            "&:after": {
              content: "''",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2.5px",
              width: 1,
              backgroundColor: `${chroma(color).darken(1.5)}`,
            },
          }}
        >
          <Box
            className='flexRow'
            sx={{
              transition: "all .25s ease-in-out",
              // // height: 1,
              // width: "fit-content",
              // padding: 0,
              transform:
                highlighted === index
                  ? "translate(0)"
                  : highlighted < index
                  ? "translateX(-300px)"
                  : "translateX(300px)",
            }}
          >
            <Button
              sx={{
                color: `${adjustBrightness(color)}`,
                width: 1,
                "&:hover": {
                  backgroundColor: `${chroma(color).darken(1)}`,
                  color: `${fontLuminosity(chroma(color).darken(1))}`,
                },
              }}
            >
              <Typography
                variant='heading1'
                sx={{
                  fontWeight: 600,
                  textTransform: "lowercase",
                }}
              >
                {color}
              </Typography>
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default PaletteShades;
