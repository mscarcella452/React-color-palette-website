// import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography } from "@mui/material";
import AuthenticationInput from "./AuthenticationInput";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function InputGrid({ inputs, onInputChange, formData }) {
  return (
    <Grid container columns={1} spacing={1}>
      {inputs.map(input => (
        <Grid xxs={1} key={uuidv4()} sx={{ height: "55px" }}>
          <AuthenticationInput
            variant={input}
            value={formData[input]}
            onInputChange={onInputChange}
          />
        </Grid>
      ))}

      <Grid xxs={1}>
        <Typography
          sx={{ height: 1, textDecoration: "underline", height: "25px" }}
        >
          Forget Password
        </Typography>
      </Grid>
    </Grid>
  );
}

export default InputGrid;
