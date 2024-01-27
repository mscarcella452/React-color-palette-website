import colorSchemes from "./colorSchemes.png";
import colorPalettes from "./colorPalettes.png";
import composition from "./composition.png";

const bullets = [
  "Endless Choices",
  "Dynamic Palettes",
  "Instant Inspiration",
  "Effortless Exploration",
  "Precision Control",
  "Seamless Integration",
];

export const featureData = [
  {
    content: {
      heading: "Craft Your Palette",
      title: "Discover Your Color Signature",
      description:
        "Discover the perfect color combinations for your designs, whether you desire subtle variations, bold contrasts, or harmonious triads.",
      bulletPoints: [
        "Endless Choices",
        "Dynamic Palettes",
        "Instant Inspiration",
        "Effortless Exploration",
      ],
      btnTitle: "Explore Now",
    },
    image: colorPalettes,
  },
  {
    content: {
      heading: "Store For Later",
      title: "Organize Your Inspriation!",
      description:
        "Bookmark your favorite hues with a click, ensuring that your go-to colors are always at your fingertips.",
      bulletPoints: [
        "Endless Choices",
        "Dynamic Palettes",
        "Instant Inspiration",
        "Effortless Exploration",
      ],
      btnTitle: "View Your Palettes",
    },
    image: composition,
  },
  {
    content: {
      heading: "Templates",
      title: "Need a creative spark?",
      description: `Check out our collection of 100+ palette templates. Utilize them for inspiration, or simply as is!`,
      bulletPoints: [
        "Endless Choices",
        "Dynamic Palettes",
        "Instant Inspiration",
        "Effortless Exploration",
      ],
      btnTitle: "View Templates",
    },
    image: colorSchemes,
  },
  {
    content: {
      heading: "Helpers",
      title: "Explore Color Harmony",
      // title: "Color Harmony Explorations",
      description:
        "Unleash your creativity by exploring the perfect color combinations for your designs, whether you seek subtle variations, striking contrasts, or harmonious triads.",
      bulletPoints: [
        "Color Shades",
        "Complimentary Colors",
        "Triadic Colors",
        "Analgous Colors",
      ],
      btnTitle: "View Helpers",
    },
    image: colorPalettes,
  },
];
