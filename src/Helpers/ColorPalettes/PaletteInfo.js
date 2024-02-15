// import React from "react";
import { Typography, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function PaletteInfo({ paletteName }) {
  //   const { colors, highlighted, paletteName } = infoProps;
  return (
    <Button
      sx={{
        backgroundColor: "transparent",
        width: 1,
        padding: 0,

        // border: "1.5px solid #F0F0F0",
        "&:hover": {
          ".moreButton": {
            backgroundColor: "info.main",
            color: "#fff",
          },
        },
      }}
    >
      <Typography
        variant='p'
        sx={{
          width: 1,
          textAlign: "Left",
          textTransform: "capitalize",
          color: "#36454F",
        }}
      >
        {paletteName}
      </Typography>
      <MoreHorizIcon
        className='moreButton'
        sx={{
          height: "30px",
          width: "30px",
          padding: "5px",
          maxHeight: 1,
          borderRadius: "50%",
          color: "fontColor.primary",
          border: "1.5px solid #F0F0F0",
        }}
      />
    </Button>
  );
}

export default PaletteInfo;
