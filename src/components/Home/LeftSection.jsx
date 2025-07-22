// components/Home/LeftSection.jsx
import { Box, Container, Typography, useTheme } from "@mui/material";
import HelloUserSection from "./LeftSectionWidget/HelloUserSection";
import { FilterSection } from "./LeftSectionWidget/FilterSection";
import CalendarSection from "./LeftSectionWidget/CalendarSection";
import QRCodeSection from "./LeftSectionWidget/QRCodeSection";
import FourHealthCardSection from "./LeftSectionWidget/FourHealthCardSection";
import PharmacySection from "./LeftSectionWidget/PharmacySection";


export const LeftSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // backgroundColor: theme.palette.background.default,
        // borderRadius: theme.shape.borderRadius_2,
        p: 3,
        height: "100%",
      }}
    >
      <HelloUserSection/>
      <FilterSection/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt:3
        }}
      >
        <CalendarSection/>
        <QRCodeSection/>
        <FourHealthCardSection/>
        <PharmacySection/>
      </Box>
    </Box>
  );
};
