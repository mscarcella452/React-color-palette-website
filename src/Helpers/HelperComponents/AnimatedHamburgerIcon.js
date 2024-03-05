// import React from "react";
import { Box } from "@mui/material";

const lines = [
  { animated: "rotate(45deg) translate(0)", default: "translateY(-7.5px)" },
  { animated: "rotate(45deg)", default: "none" },
  { animated: "rotate(-45deg) translate(0)", default: "translateY(7.5px)" },
];

function AnimatedHamburgerIcon({
  animate,
  backgroundColor = "#fff",
  thickness = "2px",
}) {
  return (
    <Box className='flexRow' sx={{ position: "relative", height: 1, width: 1 }}>
      {lines.map(line => (
        <Box
          sx={{
            backgroundColor: backgroundColor,
            height: thickness,
            width: 1,
            // top: 0,
            position: "absolute",
            transform: animate ? line.animated : line.default,
            transition: "transform 1s linear",
            borderRadius: "1px",
          }}
        />
      ))}
    </Box>
  );
}

export default AnimatedHamburgerIcon;
