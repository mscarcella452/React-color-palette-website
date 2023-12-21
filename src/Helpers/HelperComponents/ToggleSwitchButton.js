import React from "react";
import { Button, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import { useToggle } from "../../Hooks/CustomHooks";

function ToggleSwitchButton({ toggled, handleToggle }) {
  return (
    <Box
      onClick={handleToggle}
      sx={{
        height: "15px",
        width: "30px",
        backgroundColor: !toggled ? "info.dark" : "primary.main",
        borderRadius: "25px",
        padding: 0,
        position: "relative",
        transition: "all .5s ease",
        // border: "1px solid",
        // borderColor: !toggled ? "info.dark" : "primary.main",
        cursor: "pointer",
        "&:after": {
          content: "''",
          height: "15px",
          width: "15px",
          position: "absolute",
          // top: 0,
          // bottom: 0,
          left: !toggled ? 0 : "15px",
          // right: toggled && 0,
          transition: "all .5s ease",
          backgroundColor: !toggled ? "info.main" : "primary.dark",
          borderRadius: "50%",
          boxShadow: 1,
        },
      }}
    >
      {/* <CircleIcon
        sx={{
          height: "25px",
          width: "25px",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: !toggled && 0,
          right: toggled && 0,
          transition: "all 2s ease",
        }}
      /> */}
    </Box>
  );
}

export default ToggleSwitchButton;
