import React from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

function FailedSearchResult({ variant = "failedSearch", onClick }) {
  return (
    <Container
      className='flexColumn'
      maxWidth={"sm"}
      sx={{
        padding: { xxs: 5, sm: 10 },
        gap: 2,
        border: 1,
        borderColor: "background.secondary",
        backgroundColor: "#fff",
        borderRadius: "5px",
        height: "fit-content",
      }}
    >
      <ErrorIcon sx={{ fontSize: "2rem" }} />
      <Typography variant='subHeading1'>
        {alertMessage[variant].title}
      </Typography>
      <Typography variant='p'>{alertMessage[variant].message}</Typography>
      <Button
        variant='primary'
        onClick={onClick}
        sx={{
          width: { xxs: 1, mobile: "200px" },
          border: 1,
          borderColor: "background.secondary",
          backgroundColor: "background.primary",
          // color: "fontColor.primary",
          marginTop: 2,
        }}
      >
        {alertMessage[variant].btnText}
      </Button>
    </Container>
  );
}

export default FailedSearchResult;

const alertMessage = {
  failedSearch: {
    title: "No Results",
    message: "We couldn't find any palette matching your search",
    btnText: "Clear Search",
  },
  logIn: {
    title: "No Results",
    message: "You must login",
    btnText: "Create A Palette",
  },
  emptyPalettes: {
    title: "No Results",
    message: "You have zero saved Palettes",
    btnText: "Create A Palette",
  },
};
