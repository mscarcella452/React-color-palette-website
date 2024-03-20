import React from "react";
import {
  Paper,
  Container,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import colorPalettes from "./colorPalettes.png";
import colorSchemes from "./colorSchemes.png";
import composition from "./composition.png";
import { CiPalette } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";
import { GiPaintRoller } from "react-icons/gi";
import { MdOutlineBookmarks } from "react-icons/md";
import {
  sm,
  md,
  lg,
  mobile,
  mobileLandscape,
} from "../../../../Theme/mediaQueries";

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
      sx={{
        backgroundColor: "#fff",
        padding: { xxs: "4rem 1rem", sm: "4rem 2rem", lg: 6 },
      }}
    >
      <Box
        sx={{
          width: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr 1fr" },
          justifyItems: "center",
          gap: 4,
        }}
      >
        {featureData.map(content => (
          <Feature content={content} />
        ))}
        {/* <Feature image={mockImage3} content={content[1]} width={0.6} />
        <Feature image={mockImage2} content={content[1]} width={1.4} /> */}
      </Box>
    </Box>
  );
}

export default FeatureContent;

function Feature({ content }) {
  const small = useMediaQuery(sm);
  const medium = useMediaQuery(md);
  const large = useMediaQuery(lg);
  const mediumScreen = small && !medium;
  const largeScreen = useMediaQuery(mobile);
  return (
    <Box
      // className='textureGradient'
      sx={{
        minHeight: 200,
        height: 1,
        width: 1,
        maxWidth: { xxs: 300, mobile: 400, sm: "md", md: 375 },
        overflow: "hidden",
        borderRadius: "10px",
        border: 2,
        borderColor: "background.secondary",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr",

        alignItems: "center",
        ...(mediumScreen && {
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "1fr",
          border: 0,
          gap: 3,
        }),
      }}
    >
      <Box
        sx={{
          width: 1,
          height: { xxs: 150, lg: 175 },

          backgroundImage: `url(${content.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          ...(mediumScreen && {
            border: 2,
            borderColor: "background.secondary",
            borderRadius: "10px",
            width: 175,
          }),
        }}
      />
      <Box
        className='flexColumn'
        sx={{
          width: 1,
          height: 1,
          justifyContent: { xxs: "center", md: "flex-start" },
          alignItems: "flex-start",
          gap: 2,
          zIndex: 2,
          padding: { xxs: 3, lg: 4 },
          position: "relative",
          overflow: "hidden",

          "&:before": {
            content: "''",
            display: { xxs: "block", sm: "none", md: "block" },
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "background.primary",
            zIndex: -1,
            opacity: 0.5,
          },
        }}
      >
        <Typography variant='subHeading'>{content.title}</Typography>
        <Typography variant='p'>{content.paragraph}</Typography>
      </Box>
    </Box>
  );
}

const featureData = [
  {
    title: "Effortlessly design unique color schemes.",
    icon: <GiPaintRoller style={{ height: "100%", width: "100%" }} />,
    image: colorPalettes,
    paragraph:
      // "Experiment with different combinations using our intuitive creator.",
      "With an intuitive interface and a diverse color wheel, you can easily mix and match hues, creating tailored made combinations.",
  },
  {
    title: "Never lose track of your favorites. ",
    icon: <MdOutlineBookmarks style={{ height: "100%", width: "100%" }} />,
    image: colorSchemes,
    // paragraph: "Bookmark specific colors for quick access and reuse.",
    paragraph:
      "Bookmark your go-to hues, guaranteeing that your most-loved colors are readily accessible whenever and wherever inspiration strikes.",
  },
  {
    title: "Streamline your design process. ",
    icon: <CiPalette style={{ height: "100%", width: "100%" }} />,
    image: composition,
    paragraph:
      "Incorporate your selected hex codes into your project with just a click, ensuring a smooth transition from inspiration to design.",
  },
];
