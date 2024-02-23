// import React from 'react'
import { Box, Typography } from "@mui/material";
import QueryTag from "./QueryTag";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function QueryTagContainer({ filteredTags, queryTags, handleUpdateTags }) {
  return (
    <Box
      className='flexColumn queryTagContainer'
      sx={{
        backgroundColor: "background.primary",
        borderRadius: { xxs: 0, lg: "0 0 5px 5px" },
        zIndex: 2,
        maxWidth: "lg",
      }}
    >
      <Typography variant='p' sx={{ fontWeight: 500, fontSize: "14px" }}>
        Colors:
      </Typography>
      <Grid
        container
        sx={{
          gap: 1,
          width: 1,
        }}
      >
        {filteredTags.map(color => (
          <Grid
            className='flexRow'
            item
            xxs={1}
            sx={{ width: "fit-content", height: "35px" }}
          >
            <QueryTag
              tag={{
                color: color,
                selected: queryTags.includes(color),
              }}
              handleClick={() => handleUpdateTags(color)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default QueryTagContainer;
