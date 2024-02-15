import { useState, useEffect, useRef } from "react";
import { Container, useMediaQuery } from "@mui/material";
import PaletteShades from "./PaletteShades";
import PaletteInfo from "./PaletteInfo";
import { touchScreen } from "../../Theme/mediaQueries";

const debounce = (timeoutRef, delayedFunction, delay) => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(() => {
    delayedFunction();
  }, delay);
};

function ColorPalette({ palette }) {
  const colorPaletteRef = useRef();
  const timeoutRef = useRef();
  const [currentPalette, setCurrentPalette] = useState(false);
  const mobile = useMediaQuery(touchScreen);

  // useEffect(() => {
  //   const colorPalette = colorPaletteRef.current;

  //   const handleDebounce = boolean =>
  //     debounce(timeoutRef, () => setCurrentPalette(boolean), 300);

  //   const handleDebounceMouseEnter = () => handleDebounce(true);
  //   const handleDebounceMouseLeave = () => handleDebounce(false);

  //   if (colorPalette && !mobile) {
  //     colorPalette.addEventListener("mouseenter", handleDebounceMouseEnter);
  //     colorPalette.addEventListener("mouseleave", handleDebounceMouseLeave);

  //     // Return the cleanup function only if event listeners were added
  //     return () => {
  //       colorPalette.removeEventListener(
  //         "mouseenter",
  //         handleDebounceMouseEnter
  //       );
  //       colorPalette.removeEventListener(
  //         "mouseleave",
  //         handleDebounceMouseLeave
  //       );
  //     };
  //   }

  //   // Return an empty function if conditions are not met
  //   return () => {};
  // }, [colorPaletteRef.current, mobile]);

  return (
    <Container
      ref={colorPaletteRef}
      disableGutters
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        // gridTemplateRows: "40px auto",
        gridTemplateRows: "auto 40px",
        // gridTemplateColumns: "70px auto",

        width: 1,
        aspectRatio: 1,
        // minHeight: 300,
        maxHeight: { xxs: 400, sm: 300, md: 350 },
        border: "1.5px solid #F0F0F0",
        borderRadius: "5px",
        gap: { xxs: 2, mobile: 1, md: 2 },
        padding: { xxs: 2, mobile: 1, md: 2 },
        backgroundColor: "#fff",
        // transform: "rotate(-90deg)",
      }}
    >
      <PaletteShades
        colors={palette.colors}
        currentPalette={true}
        // currentPalette={mobile ? true : currentPalette}
      />
      <PaletteInfo paletteName={palette.paletteName} />
    </Container>
  );
}

export default ColorPalette;
