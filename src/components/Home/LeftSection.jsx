// components/Home/LeftSection.jsx
import { Box, Grid } from "@mui/material";
import HelloUserSection from "./LeftSectionWidget/HelloUserSection";
import { FilterSection } from "./LeftSectionWidget/FilterSection";
import CalendarSection from "./LeftSectionWidget/CalendarSection";
import QRCodeSection from "./LeftSectionWidget/QRCodeSection";
import FourHealthCardSection from "./LeftSectionWidget/FourHealthCardSection";
import PharmacySection from "./LeftSectionWidget/PharmacySection";

export const LeftSection = () => {
  return (
    <Box>
      <HelloUserSection />
      <FilterSection />
      <Grid container sx={{ mt: 2 }}>
        <Grid item size={{ xs: 12, md: 3 }} sx={{ p: 0.5 }}>
          <CalendarSection />
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }} sx={{ p: 0.5 }}>
          <QRCodeSection />
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }} sx={{ p: 0.5 }}>
          <FourHealthCardSection />
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }} sx={{ p: 0.5 }}>
          <PharmacySection />
        </Grid>
      </Grid>
    </Box>
  );
};
