import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Box, useTheme } from "@mui/material";

export const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: `${theme?.palette?.primary?.backgroundColorMain}`,
      }}
    >
      <Header />
      {children}
      {/* <Footer /> */}
    </Box>
  );
};
