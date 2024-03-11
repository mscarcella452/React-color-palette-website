import { useContext, useRef } from "react";
import { Paper, Container, Typography, Box, Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./Components/HeroSection";
import Feature from "./Components/Features/Feature";
import MockFeature from "./Components/Mock Feature/MockFeature";
import PaletteShowcase from "./Components/PaletteShowcase";
import PaletteFeatures from "./Components/PaletteFeatures/PaletteFeatures";
import Footer from "../Footer/Footer";
import { mobileLandscape, mobilePortrait } from "../../Theme/mediaQueries";
import SiteOverview from "./Components/SiteOverview";
import { UIContext } from "../../Context/AppContext";
import colorSchemes from "./colorSchemes.png";
import colorPalettes from "./colorPalettes.png";
import composition from "./composition.png";

const paintStroke =
  'url("https://www.transparenttextures.com/patterns/subtle-white-feathers.png")';

const mockImage = "https://pngimg.com/uploads/brush/brush_PNG7375.png";

function HomePage() {
  const { currentUser, users } = useContext(UIContext);
  const homepageRef = useRef();
  return (
    <Paper
      variant='pagePaper'
      ref={homepageRef}
      sx={{ overscrollBehavior: "none" }}
    >
      <Navbar forwardedRef={homepageRef} />

      {/* <Box sx={{ height: "calc(100vh - 70px)", width: 1, background: "#fff" }}>
        <div>
          Current User:
          {currentUser !== null && currentUser.username}
        </div>
        {users.map((user, index) => (
          <Box className='flexColumn' sx={{ border: 1, gap: 1 }}>
            <div>user: {index + 1}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>password: {user.password}</div>
          </Box>
        ))}
      </Box> */}

      <HeroSection />
      <MockFeature />

      <Feature contentIndex={0} />
      <PaletteFeatures />
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
