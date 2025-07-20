// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
      lightGrey: "#d3d3d3",
      color_1: "#080808",
      color_2: "#EFEEF3",
      border_1: "#E7E7E7",
      bgcolor_1: "#F6F6F6",
      hover_1: "#8198F0",
    },
  },
  shape: {
    borderRadius_1: 20,
  },
});

export default theme;
