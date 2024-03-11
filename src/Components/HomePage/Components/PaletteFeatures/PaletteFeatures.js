import { useRef } from "react";
import {
  Paper,
  Container,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PaletteFeaturesGrid from "./Components/PaletteFeaturesGrid";
import { md } from "../../../../Theme/mediaQueries";

import { paletteFeaturesData } from "./data/PaletteFeaturesData";

function PaletteFeatures() {
  const featurePaperRef = useRef(null);
  const largeScreen = useMediaQuery(md);
  return (
    <Paper
      ref={featurePaperRef}
      variant='featurePaper'
      sx={{ position: "relative", backgroundColor: "#fff" }}
    >
      <Container className='flexColumn' sx={{ gap: "4rem" }}>
        {/* <PaletteFeaturesGrid
          forwardedRef={featurePaperRef}
          largeScreen={largeScreen}
        /> */}
        {paletteFeaturesData.map(content => (
          <Box
            className='flexColumn'
            sx={{
              height: 1,

              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <Box className='flexRow' sx={{ gap: "25px" }}>
              <Typography
                className='flexRow'
                variant='subHeading'
                sx={{
                  height: "40px",
                  width: "45px",
                  // border: "4px solid",
                  color: "primary.main",
                  display: { xxs: "none", sm: "flex" },
                  // borderColor: "info.main",

                  // backgroundColor: "background.primary",
                }}
              >
                {"\u2192"}
              </Typography>
              <Typography
                variant='subHeading'
                sx={{
                  lineHeight: 1.5,
                  fontWeight: 600,
                  // width: 1,
                  textAlign: "left",
                  // color: "fontColor.primary",
                  color: "primary.main",
                }}
              >
                {content.title}
              </Typography>
            </Box>

            <Typography
              variant='p'
              sx={{
                color: "fontColor.secondary",
                paddingLeft: { xxs: 0, sm: "70px" },
                // paddingLeft: "70px",
              }}
            >
              {content.description}
            </Typography>
          </Box>
        ))}
      </Container>
    </Paper>
  );
}

export default PaletteFeatures;
