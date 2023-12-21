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

function Palette({ initialHighlight = 0, colors, paletteName }) {
  const [highlighted, setHighlighted] = useState(initialHighlight);

  return (
    <Container
      disableGutters
      sx={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        gap: "10px",
      }}
    >
      <Grid
        container
        columns={12}
        sx={{
          width: 1,
          height: 1,
          overflow: "hidden",
          borderRadius: "2.5px",
          boxShadow: 2,
        }}
      >
        {colors.map((color, index) => (
          <Grid
            xxs={highlighted === index ? 6 : 6 / (colors.length - 1)}
            onClick={() => setHighlighted(index)}
            sx={{
              backgroundColor: color,

              transition: "all .5s ease-in-out",
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
                height: 1,
                width: 1,
                padding: "10px",
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

      <Button
        sx={{
          backgroundColor: "background.secondary",
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
