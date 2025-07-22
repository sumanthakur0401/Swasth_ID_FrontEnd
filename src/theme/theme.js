import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#25242f",
      backgroundColorMain: "#f6f5fa",
      lightGrey: "#d3d3d3",
      color_1: "#25242f",
      color_2: "#EFEEF3",
      border_1: "#E7E7E7",
      bgcolor_1: "#e5e4ebff",
      bgcolor_2: "#f6f5fe",
      hover_1: "#25242f",
      themeColor_1: "#8d6ef7",
      themeColor_2: "#36a9e8",
      themeColor_3: "#ff8787",
      themeColor_4: "#a0e870",
      themeColor_4_dark: "#163300",
      themeColor_3_dark: "#8e3838ff",
    },
  },
  typography: {
    fontFamily: "Lexend, sans-serif", // ✅ Matches global CSS
  },
  shape: {
    borderRadius_1: 20,
    borderRadius_2: 10
  },
});

export default theme;
