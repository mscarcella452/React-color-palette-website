import { useState, useEffect } from "react";
import { useToggle, useCopy } from "../../Hooks/CustomHooks";
import { Box, Typography, Button, Alert } from "@mui/material";
import { adjustBrightness } from "../functionHelpers";
import chroma from "chroma-js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const useGridWidth = colors => {
  const highlightWidth = colors.length * 0.7;
  const defaultWidth = (colors.length * 0.3) / (colors.length - 1);
  return [highlightWidth, defaultWidth];
};

const useHighlightColor = (initialValue = 0) => {
  const [state, setState] = useState(0);
  const [hoverSelected, toggleHoverSelected] = useToggle(true);

  const handleClick = index => {
    if (state !== index) {
      toggleHoverSelected();
      setState(index);
      setTimeout(() => {
        toggleHoverSelected();
      }, 250);
    }
  };

  return [state, handleClick, hoverSelected];
};

const randomIndex = length => Math.floor(Math.random() * length + 1);

function PaletteShades({
  colors,
  initialValue = randomIndex(colors.length - 1),
  currentPalette,
  sx,
}) {
  const [selected, handleClick, hoverSelected] =
    useHighlightColor(initialValue);

  // const [highlightWidth, defaultWidth] = useGridWidth(colors);
  // const [alert, setAlert] = useState("");
  // const [copyAlert, copyToClipboard] = useCopy(colors[selected]);

  return (
    <Grid
      container
      //   columns={colors.length}
      columns={1}
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
        // borderRadius: "2.5px",
        borderRadius: "5px",
        // boxShadow: 1,
        ...sx,
      }}
    >
      {/* {copyAlert.active && (
        <Alert
          className='flexRow'
          severity={copyAlert.severity}
          sx={{
            position: "absolute",
            left: "1rem",
            bottom: "1rem",
            border: 1,
            borderRadius: "5px",
          }}
        >
          <Typography
            variant='p'
            textTransform='lowercase'
            sx={{ fontWeight: 600 }}
          >
            {copyAlert.message}
          </Typography>
        </Alert>
      )} */}

      {colors.map((color, index) => (
        <Grid
          className='flexRow'
          //   xxs={selected === index ? highlightWidth : defaultWidth}
          xxs={1}
          onClick={() => handleClick(index)}
          sx={{
            height: selected === index ? 0.4 : 0.6 / (colors.length - 1),
            backgroundColor: color,
            transition: "1s all ease",
            overflow: "hidden",
            cursor: selected !== index && "pointer",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            border:
              color[color.length - 1] === "F" && color[color.length - 2] === "F"
                ? 1
                : 0,
            borderColor: "#F0F0F0",
          }}
        >
          {
            <HexCodeButton
              color={color}
              activeColor={selected === index && hoverSelected}
              currentPalette={currentPalette}
            />
          }

          {/* <Button
            onClick={copyToClipboard}
            sx={{
              color: `${adjustBrightness(color)}`,
              "&:hover": {
                color:
                  selected === index &&
                  hoverSelected &&
                  `${chroma(color).darken(1)}`,
                cursor:
                  selected === index && hoverSelected ? "copy" : "pointer",
              },
              padding: 2,
              borderRadius: "5px",
              opacity: selected === index ? 1 : 0,
              transition: "1s opacity ease",
            }}
          >
            <Typography
              variant='label'
              textTransform='lowercase'
              sx={{ fontWeight: 500 }}
            >
              {color}
            </Typography>
          </Button> */}
        </Grid>
      ))}
    </Grid>
  );
}

export default PaletteShades;

function HexCodeButton({ color, activeColor, currentPalette }) {
  const [copyAlert, copyToClipboard] = useCopy(color);

  // const active = activeColor && !delay;

  return (
    <>
      {copyAlert.active && (
        <Alert
          className='flexRow'
          severity={copyAlert.severity}
          sx={{
            position: "absolute",
            left: "1rem",
            bottom: "1rem",
            border: 1,
            borderRadius: "5px",
            zIndex: 10,
          }}
        >
          <Typography
            variant='p'
            textTransform='lowercase'
            sx={{ fontWeight: 600 }}
          >
            {copyAlert.message}
          </Typography>
        </Alert>
      )}
      <Button
        onClick={() => activeColor && copyToClipboard()}
        sx={{
          color: `${adjustBrightness(color)}`,
          "&:hover": {
            color: activeColor && `${chroma(color).darken(1)}`,
            cursor: activeColor ? "copy" : "pointer",
          },
          padding: 2,
          borderRadius: "5px",
          opacity: activeColor ? 1 : 0,

          transform:
            currentPalette && activeColor
              ? "translateY(0)"
              : "translateX(500%)",
          transition: "1s all ease",
          // transform: !mobile
          //   ? currentPalette && activeColor
          //     ? "translateY(0)"
          //     : "translateX(500%)"
          //   : "translateX(0)",
        }}
      >
        <Typography
          variant='label'
          textTransform='lowercase'
          sx={{ fontWeight: 500 }}
        >
          {color}
        </Typography>
      </Button>
    </>
  );
}
