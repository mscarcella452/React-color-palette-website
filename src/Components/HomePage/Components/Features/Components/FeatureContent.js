import { Typography, Box, IconButton, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const colorFreedomBenefits = [
  "Endless Choices",
  "Dynamic Palettes",
  "Instant Inspiration",
  "Effortless Exploration",
  // "Precision Control",
  // "Seamless Integration",
];

function FeatureContent({ content }) {
  const { heading, title, description, bulletPoints, btnTitle } = content;
  return (
    <Box
      className='flexColumn'
      sx={{
        width: 1,
        height: 1,
        gap: "1.5rem",
        alignItems: "flex-start",
      }}
    >
      <Typography
        variant='p'
        textAlign='left'
        sx={{ width: 1, fontWeight: 700, color: "info.main" }}
      >
        {heading}
      </Typography>
      <Typography
        variant='heading3'
        textAlign='left'
        sx={{ width: 1, fontWeight: 700, color: "fontColor.primary" }}
      >
        {title}
      </Typography>
      <Typography
        variant='subHeading2'
        textAlign='left'
        sx={{ fontWeight: 300, maxWidth: "750px" }}
      >
        {description}
      </Typography>

      <Grid container columns={bulletPoints.length / 2} sx={{ width: 1 }}>
        {bulletPoints.map(bulletPoint => (
          <Grid xxs={1} className='flexRow' sx={{ padding: 1, gap: 1 }}>
            <Typography sx={{ color: "info.main" }}>&#10003;</Typography>
            <Typography
              variant='p'
              textAlign='left'
              sx={{ width: 1, fontWeight: 700, color: "info.main" }}
            >
              {bulletPoint}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Button
        className='flexRow'
        sx={{
          // border: 1,
          // boxShadow: 1,
          // borderColor: "#6C64FF",
          padding: 2,
          // width: 1,
          // justifyContent: "flex-start",
          gap: 1,
          backgroundColor: "#6C64FF",
          color: "background.primary",
          textTransform: "none",

          "&:hover": {
            backgroundColor: "#6C64FF",
            color: "background.primary",
            boxShadow: 1,
            borderColor: "#6C64FF",
            "& .button_icon": {
              transform: "translateX(5px)",
              "& .arrow-icon": {
                display: "inline",
              },
              "& .chevron-icon": {
                display: "none",
              },
            },
          },
        }}
      >
        <Typography>{btnTitle}</Typography>
        <Box
          className='button_icon flexRow'
          sx={{ transition: "transform 0.3s" }}
        >
          <ChevronRightIcon
            className='chevron-icon'
            sx={{ display: "inline" }}
          />
          <ArrowForwardIcon className='arrow-icon' sx={{ display: "none" }} />
        </Box>
      </Button>
    </Box>
  );
}

export default FeatureContent;
