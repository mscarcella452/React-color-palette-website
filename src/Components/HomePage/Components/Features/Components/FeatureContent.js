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
        backgroundColor: "background.primary",
        border: 1,
        borderColor: "background.secondary",
        borderRadius: "10px",
        padding: 4,

        position: "relative",
        // border: 1,
        zIndex: 1,
        boxShadow: 2,
        // "&:before": {
        //   content: "''",
        //   position: "absolute",
        //   top: -40,
        //   right: -700,
        //   bottom: -40,
        //   width: "200vh",
        //   borderRadius: "0 10px 10px 0",
        //   backgroundColor: "background.secondary",
        //   // opacity: 0.25,
        //   zIndex: -1,
        // },
      }}
    >
      <Typography
        variant='heading3'
        textAlign='left'
        sx={{
          fontWeight: 700,
          color: "primary.main",
          zIndex: 1,
          // border: 1,
          width: 0.75,
          paddingRight: 2,

          position: "relative",
          // "&:before": {
          //   content: "''",
          //   position: "absolute",
          //   top: -10,
          //   right: 0,
          //   bottom: -10,
          //   width: "100vh",
          //   borderRadius: "0 10px 10px 0",
          //   backgroundColor: "primary.dark",
          //   zIndex: -1,
          // },
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant='subHeading3'
        textAlign='left'
        sx={{ color: "primary.dark", fontWeight: 700, display: "none" }}
        // sx={{ width: 1, fontWeight: 700, color: "primary.dark" }}
      >
        {title}
      </Typography>
      {/* <Typography
        variant='subHeading3'
        textAlign='left'
        sx={{
          fontWeight: 500,
          maxWidth: "750px",
          // color: "background.secondary",
        }}
      >
        {description}
      </Typography> */}

      <Grid container columns={bulletPoints.length / 2} sx={{ width: 1 }}>
        {bulletPoints.map(bulletPoint => (
          <Grid xxs={1} className='flexRow' sx={{ padding: 1, gap: 1 }}>
            <Typography sx={{ color: "primary.main" }}>&#10003;</Typography>
            <Typography
              variant='p'
              textAlign='left'
              sx={{ width: 1, fontWeight: 500 }}
              // sx={{ width: 1, fontWeight: 700, color: "primary.main" }}
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
