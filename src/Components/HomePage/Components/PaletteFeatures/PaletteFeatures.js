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
              // border: 1,
              // borderColor: index === 0 ? "red" : "blue",
              // background: "lightgrey",
              gap: "1rem",

              position: "relative",
              transition: "inherit",
              // zIndex: showContent ? 10 : 9,
              // backgroundColor: "background.primary",
              "&:before": {
                // content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${content.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "#fff",
                zIndex: -1,
                opacity: 0.05,
              },
            }}
          >
            <Box className='flexRow' sx={{ width: 1, gap: "25px" }}>
              <Typography
                className='flexRow'
                variant='subHeading1'
                sx={{
                  height: "40px",
                  width: "45px",
                  // border: "4px solid",
                  color: "info.main",
                  borderColor: "info.main",

                  // backgroundColor: "background.primary",
                }}
              >
                {"\u2192"}
              </Typography>
              <Typography
                variant='subHeading2'
                sx={{
                  lineHeight: 1.5,
                  fontWeight: 500,
                  color: "fontColor.primary",
                }}
              >
                {content.title}
              </Typography>
            </Box>

            <Typography
              variant='subHeading2'
              sx={{
                fontWeight: 300,
                color: "fontColor.secondary",
                paddingLeft: "70px",
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
