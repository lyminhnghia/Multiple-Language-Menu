import { yellow } from "@material-ui/core/colors";

const white = "#FFFFFF";
const black = "#000000";
const gray = "rgba(255, 255, 255, 0.5)";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: "#1C4877",
    main: "#305C8B",
    light: "#2564A8",
  },
  secondary: {
    contrastText: black,
    dark: "#c7c200",
    main: "#fef448",
    light: "#ffff7d",
  },
  success: {
    contrastText: black,
    dark: "#568906",
    main: "#8FE822",
    light: "#E4F89B",
  },
  info: {
    contrastText: black,
    dark: "#0A51B7",
    main: "#00C8FF",
    light: "#A1DFFF",
  },
  warning: {
    contrastText: yellow,
    dark: "#B77501",
    main: "#FFB000",
    light: "#FFE999",
  },
  error: {
    contrastText: gray,
    dark: "#AC2925",
    main: "#D03C38",
    light: "#FF6263",
  },
  text: {
    primary: white,
    secondary: gray,
    link: "#00C8FF",
  },
  background: {
    default: "#151937",
    paper: white,
  },
  icon: "#3A3B3F",
  divider: "rgba(255, 255, 255, 0.34)",
};
