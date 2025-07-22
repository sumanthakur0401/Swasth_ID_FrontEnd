import { Box, Typography, useTheme } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices"; // fallback
import BiotechIcon from "@mui/icons-material/Biotech"; // 🧠 Neurologist
import VisibilityIcon from "@mui/icons-material/Visibility"; // 👁️ Fallback for Eye Care
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; // ➕

import ToothIcon from "@mui/icons-material/MedicalServices"; // Use your preferred tooth-like icon
import GlassesIcon from "@mui/icons-material/Visibility"; // Substitute or custom if needed

import React from "react";

const FourHealthCardSection = () => {
  const theme = useTheme();

  const cards = [
    { label: "Dental", icon: <ToothIcon /> },
    { label: "Eye Care", icon: <GlassesIcon /> },
    { label: "Neurologist", icon: <BiotechIcon /> },
    { label: "More", icon: <MoreHorizIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 250,
        height: 250,
        borderRadius: 10,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 1.5,
      }}
    >
      {cards.map((card, idx) => (
        <Box
          key={idx}
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: 10,
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            boxShadow: "0px 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {card.icon &&
              React.cloneElement(card.icon, {
                sx: {
                  color: theme.palette.primary.bgcolor_1,
                  fontSize: 26,
                },
              })}
          </Box>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: theme.palette.primary.bgcolor_1,
              textAlign: "center",
            }}
          >
            {card.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FourHealthCardSection;
