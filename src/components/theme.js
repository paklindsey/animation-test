import { createTheme } from "@mui/material/styles";

const yellow = "#FBC143";
const blue = "#3E47E9";
const grey = "#646464";
const gold = "#AF8D43";

export default createTheme({
  palette: {
    common: {
      yellow: yellow,
      blue: blue,
      grey: grey,
      gold: gold,
    },
  },
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: 800,
      letterSpacing: "2px",
      fontSize: "20rem",
    },
    h2: {
      fontFamily: "Lato",
      fontWeight: 400,
      letterSpacing: "2px",
      fontSize: "4.5rem",
    },
    h6: {
      fontFamily: "Lato",
      fontWeight: 400,
      letterSpacing: "2px",
      fontSize: "1.875rem",
    },
    body1: {
      fontFamily: "Lato",
      fontWeight: 400,
      letterSpacing: "2px",
      fontSize: "1.125rem",
    },
  },
});
