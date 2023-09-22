import { createTheme } from "@mui/material/styles/index.js";
import { red } from "@mui/material/colors/index.js";

const my_green = "#28561D";
// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: my_green,
      light: "#56A840",
    },
    secondary: {
      main: "#D7D8DA",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h3: {
      fontFamily: "Parisienne",
      fontWeight: 700,
      fontSize: "4rem",
      color: my_green,
    },
    h2: {
      fontFamily: "Noto-Serif-Display",
      fontWeight: 900,
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Roboto",
      fontWeight: 500,
    },
  },
});

export default theme;
