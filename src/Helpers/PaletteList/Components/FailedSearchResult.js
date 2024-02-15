import React from "react";
import { Button, Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

function FailedSearchResult({ onClick }) {
  return (
    <Box
      className='flexColumn'
      sx={{
        margin: "auto",
        padding: { xxs: 5, sm: 10 },
        gap: 2,
        backgroundColor: "background.primary",
        borderRadius: "5px",
      }}
    >
      <ErrorIcon sx={{ fontSize: "2rem" }} />
      <Typography variant='subHeading1'>No Results</Typography>
      <Typography variant='p'>
        We couldn't find any palette matching your search.
      </Typography>
      <Button
        variant='primary'
        onClick={onClick}
        sx={{
          width: { xxs: 1, mobile: "200px" },
          border: 1,
          backgroundColor: "background.primary",
          marginTop: 2,
        }}
      >
        Clear Search
      </Button>
    </Box>
  );
}

export default FailedSearchResult;
