import { useMemo } from "react";
import { Paper, Container, Typography, Box, Button } from "@mui/material";
import Navbar from "./Navbar";
import HeroSection from "./Components/HeroSection";
import Feature from "./Components/Features/Feature";
import MockFeature from "./Components/Mock Feature/MockFeature";
import PaletteShowcase from "./Components/PaletteShowcase";
import PaletteFeatures from "./Components/PaletteFeatures/PaletteFeatures";
import Footer from "../Footer/Footer";
import { mobileLandscape, mobilePortrait } from "../../Theme/mediaQueries";
import SiteOverview from "./Components/SiteOverview";

const paintStroke =
  'url("https://www.transparenttextures.com/patterns/subtle-white-feathers.png")';

function HomePage() {
  return (
    <Paper
      variant='paperPage'
      sx={{
        position: "relative",
        // backgroundColor: "info.light",

        // backgroundColor: "info.light",
        backgroundColor: "background.secondary",
        //

        // backgroundColor: colors.teal.darkest,
      }}
    >
      <Navbar />
      <HeroSection />
      <Feature contentIndex={0} />
      <MockFeature />
      <SiteOverview contentIndex={0} />
      <Feature contentIndex={1} />
      <PaletteFeatures />
      <SiteOverview contentIndex={1} />
      <Feature contentIndex={2} />
      <PaletteShowcase />
      <SiteOverview contentIndex={1} />
      <Feature contentIndex={3} />
      <PaletteFeatures />
      <SiteOverview contentIndex={1} />

      <Footer />
    </Paper>
  );
}

export default HomePage;

const colors = {
  primary: "#F3E0D7",
  secondary: "#D7E1EB",
  info: "#F8F8F8",
  fonts: { primary: "#000000", secondary: "#FFFFFF" },
};
