// import { useState } from "react";
// import { useToggle } from "../../../Hooks/CustomHooks";
import { Box, Typography, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";

const tagIcon = selected =>
  selected ? (
    <ClearIcon sx={{ fontSize: "14px" }} />
  ) : (
    <AddIcon sx={{ fontSize: "14px" }} />
  );

function QueryTag({ tag, handleClick, tagJam }) {
  const icon = tagIcon(tag.selected);

  return (
    <Button
      onClick={handleClick}
      className='flexRow'
      sx={{
        width: "fit-content",
        backgroundColor: tag.selected ? "#ECECEC" : "transparent",
        color: "fontColor.secondary",
        border: "1px solid #ECECEC",
        "&:hover": {
          backgroundColor: "#EBEBEB",
          color: "fontColor.primary",
          fontWeight: 600,
          "& .tagIcon": { borderColor: "background.primary" },
        },
        height: 1,
        textTransform: "none",
        padding: "0 5px",
        gap: "5px",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          backgroundColor: tag.color,
          height: "15px",
          aspectRatio: 1,
          borderRadius: "50%",
          border: "1px solid #ECECEC",
        }}
      />
      <Typography
        variant='p'
        sx={{
          fontSize: { xxs: "14px" },
          display: tagJam ? "none" : { xxs: "none", sm: "block" },
        }}
      >
        {tag.color}
      </Typography>
      <Box
        className='flexRow tagIcon'
        sx={{
          borderLeft: "1px solid",
          borderColor: tag.selected ? "background.primary" : "#ECECEC",
          // color: tag.selected ? "background.primary" : "lightgrey",
          height: 1,
          paddingLeft: "5px",
        }}
      >
        {icon}
      </Box>
    </Button>
  );
}

export default QueryTag;
