import React from "react";
import { Paper, Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import colorPalettes from "./colorPalettes.png";
import colorSchemes from "./colorSchemes.png";
import composition from "./composition.png";

const mockImage = "https://clipart-library.com/image_gallery2/Laptop.png";
const mockImage2 =
  "https://cdn0.iconfinder.com/data/icons/essential-vol-2-4/1000/design___swatches_swatch_color_palette_web_design_graphic_design_colour-512.png";
const mockImage3 =
  "https://cdn0.iconfinder.com/data/icons/essential-vol-2-4/1000/design___art_artistic_creative_illustration_web_design_graphic_design_traditional_paintbrush-1024.png";

const mockImage4 =
  "https://www.pngarts.com/files/7/Web-Design-PNG-Image-Transparent.png";

function FeatureContent() {
  return (
    <Box
      className='flexColumn'
      sx={{
        backgroundColor: "#fff",
        // backgroundColor: "info.dark",
        backgroundColor: "background.primary",
        padding: { xxs: "2rem 1rem", sm: "2rem", lg: 6 },
        gap: 4,
      }}
    >
      <Typography
        variant='subHeading'
        color='fontColor.primary'
        fontWeight={600}
        sx={{ zIndex: 2, width: 1 }}
      >
        Create Your Palette
      </Typography>
      <Grid container columns={{ xxs: 1 }} sx={{ border: 0, width: 1 }}>
        <Feature image={mockImage3} content={content[0]} width={0.65} />
        <Feature image={mockImage2} content={content[1]} width={0.35} />
        {/* <Feature image={mockImage3} content={content[2]} width={0.85} />
        <Feature image={mockImage3} content={content[3]} /> */}
      </Grid>
    </Box>
  );
}

export default FeatureContent;

function Feature({ image, content, width }) {
  return (
    <Grid
      item
      xs={1}
      md={width}
      sx={{
        // border: 1,
        padding: 1,
        position: "relative",

        "&:before": {
          content: "''",
          position: "absolute",
          top: "1rem",
          right: "1rem",
          left: "1rem",
          bottom: "1rem",
          borderRadius: "10px",
          // height: 1,
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          opacity: 0.05,
        },
      }}
    >
      <Box
        className='textureGradient flexRow'
        sx={{
          // border: 1,
          height: { xxs: 325, md: 300 },
          width: 1,
          borderRadius: "10px",
          // alignContent: "flex-end",
          // boxShadow: 1,
          border: 2,
          borderColor: "background.secondary",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#fff",
          padding: 4,
          // display: "grid",
          // gridTemplateColumns: "1fr",
          // gridTemplateRows: "30px 1fr",
          gap: 1,
          position: "relative",

          // zIndex: 10,
        }}
      >
        <Typography
          variant='heading1'
          color='fontColor.primary'
          fontWeight={600}
          sx={{
            fontSize: { xxs: "35px" },
            zIndex: 2,
            border: 1,
            alignSelf: "flex-end",
          }}
        >
          {content.paragraph}
        </Typography>

        {/* <Box
          className='flexColumn'
          sx={{
            zIndex: 2,
            // border: 1,
            width: 1,
            height: 1,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Typography
            variant='subHeading'
            sx={{ zIndex: 2, color: "info.main", fontWeight: 500, width: 0.75 }}
          >
            {content.title}
          </Typography>

          <Typography variant='label'>{content.subTitle}</Typography>
        </Box> */}
      </Box>
    </Grid>
  );
}

function FeatureA({ image, content }) {
  return (
    <Grid
      item
      xs={1}
      md={1.15}
      sx={{
        // border: 1,
        padding: 1,
        position: "relative",

        "&:before": {
          content: "''",
          position: "absolute",
          top: "1rem",
          right: "1rem",
          left: "1rem",
          bottom: "1rem",
          borderRadius: "10px",
          // height: 1,
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          opacity: 0.05,
        },
      }}
    >
      <Box
        className='textureGradient'
        sx={{
          // border: 1,
          height: { xxs: 325, md: 400 },
          width: 1,
          borderRadius: "10px",
          // boxShadow: 1,
          border: 2,
          borderColor: "background.secondary",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#fff",
          padding: 4,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "30px 1fr",
          gap: 1,
          position: "relative",

          // zIndex: 10,
        }}
      >
        <Typography
          variant='heading1'
          color='fontColor.primary'
          fontWeight={600}
          sx={{ fontSize: { xxs: "35px" }, zIndex: 2 }}
        >
          {content.paragraph}
        </Typography>

        <Box
          className='flexColumn'
          sx={{
            zIndex: 2,
            // border: 1,
            width: { xxs: 1, sm: 0.6 },
            height: 1,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Typography
            variant='subHeading'
            sx={{ zIndex: 2, color: "info.main", fontWeight: 500, width: 0.75 }}
          >
            {content.title}
          </Typography>

          <Typography variant='p'>{content.subTitle}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

function FeatureB({ image, content }) {
  return (
    <Grid
      item
      xs={1}
      md={0.85}
      sx={{
        // border: 1,
        padding: 1,
        position: "relative",

        "&:before": {
          content: "''",
          position: "absolute",
          top: "1rem",
          bottom: "1rem",
          right: "1rem",
          left: { xxs: null, md: "1rem" },

          // bottom: { xxs: "1rem", md: null },
          // border: 1,
          borderRadius: "10px",

          // height: { xxs: "auto", md: 1 },
          width: { xxs: 0.5, md: "auto" },
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          filter: "grayscale(1)",
          opacity: 0.05,
        },
      }}
    >
      <Box
        className='textureGradient'
        sx={{
          // border: 1,
          height: { xxs: 325, md: 400 },
          width: 1,
          borderRadius: "10px",
          // boxShadow: 1,
          border: 2,
          borderColor: "background.secondary",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#fff",
          padding: 4,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr",
          gap: 1,
          position: "relative",

          // zIndex: 10,
        }}
      >
        <Typography
          variant='heading1'
          color='fontColor.primary'
          fontWeight={600}
          sx={{ fontSize: { xxs: "35px" }, zIndex: 2 }}
        >
          {content.paragraph}
        </Typography>

        <Box
          className='flexColumn'
          sx={{
            zIndex: 2,
            // border: 1,

            height: { xxs: 0.5, sm: 1, md: 0.5 },
            width: { xxs: 1, sm: 0.5, md: 1 },

            justifyContent: "flex-end",
            alignItems: "flex-start",
            gap: 1,
            alignSelf: "flex-end",
          }}
        >
          <Typography
            variant='subHeading'
            sx={{ zIndex: 2, color: "info.main", fontWeight: 500, width: 0.75 }}
          >
            {content.title}
          </Typography>
          <Typography variant='p'>{content.subTitle}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

const content = [
  {
    title: "Create",
    subTitle:
      "Discover the perfect color combinations for your designs, whether you desire subtle variations, bold contrasts, or harmonious triads.",
    paragraph:
      "Effortlessly mix and match hues, creating unique combinations tailored to your artistic style.",
  },
  {
    title: "store your favorites for later",
    subTitle:
      "Discover the perfect color combinations for your designs, whether you desire subtle variations, bold contrasts, or harmonious triads.",
    paragraph: "Your go-to colors are always at your fingertips.",
  },
  {
    title: "100+ pre-made palettes",
    subTitle:
      "Discover the perfect color combinations for your designs, whether you desire subtle variations, bold contrasts, or harmonious triads.",
    paragraph:
      "Utilize our most popular templates for inspiration, or simply as is!",
  },
  {
    title: "Helpers",
    subTitle:
      "Discover the perfect color combinations for your designs, whether you desire subtle variations, bold contrasts, or harmonious triads.",
    paragraph:
      "Explore the perfect color combinations for your designs, whether you seek subtle variations, striking contrasts, or harmonious triads.",
  },
];
