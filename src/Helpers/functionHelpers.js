import chroma from "chroma-js";

export const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

function getRange(hexColor) {
  return ["#fff", hexColor, chroma(hexColor).darken(1.4).hex()];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

function fontLuminosity(color) {
  let newColor;
  const backgroundLum = chroma(color).luminance();
  backgroundLum >= 0.4
    ? (newColor = chroma(color).darken(10))
    : (newColor = chroma(color).brighten(10));
  return newColor;
}
function adjustLuminosity(color, lumin) {
  const newColor = chroma(color).luminance(lumin);
  return newColor;
}
function adjustBrightness(color) {
  let newColor;
  const backgroundLum = chroma(color).luminance();
  backgroundLum >= 0.5
    ? (newColor = chroma(color).darken(2))
    : (newColor = chroma(color).brighten(2));

  return newColor;
}
// function darkenColor(color, level) {
//   return chroma(color).darken(level);
// }

function organizeColorShades(color) {
  let colorSchemes = [];
  Object.entries(color.colors).map(([key, value]) =>
    colorSchemes.push({ level: key, colors: value })
  );

  return colorSchemes;
}

export {
  fontLuminosity,
  adjustLuminosity,
  adjustBrightness,
  organizeColorShades,
};
