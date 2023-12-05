const breakpoints = {
  values: {
    xxs: 0,
    xs: 376,
    mobile: 500,
    sm: 700,
    md: 1000,
    lg: 1200,
    xl: 1536,
  },
};

// const iphone4 = "@media (max-height:480px) and (max-width:320px)";
const xxs = `@media (min-width:${breakpoints.values.xxs}px)`;
const xs = `@media (min-width:${breakpoints.values.xs}px)`;
const mobile = `@media (min-width:${breakpoints.values.mobile}px)`;
const sm = `@media (min-width:${breakpoints.values.sm}px)`;
const md = `@media (min-width:${breakpoints.values.md}px)`;
const lg = `@media (min-width:${breakpoints.values.lg}px)`;

const mobileLandscape = "@media (pointer: coarse) and (orientation: landscape)";
const mobilePortrait = "@media (pointer: coarse) and (orientation: portrait)";
const touchScreen = mobileLandscape || mobilePortrait;

export default breakpoints;

export {
  xxs,
  xs,
  mobile,
  sm,
  md,
  lg,
  mobilePortrait,
  mobileLandscape,
  touchScreen,
};
