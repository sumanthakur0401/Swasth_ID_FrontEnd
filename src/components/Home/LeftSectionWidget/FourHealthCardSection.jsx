import React from "react";
import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import {
  BiotechRounded,
  LocalHospitalRounded,
  MoreHorizRounded,
  Visibility,
} from "@mui/icons-material";

const FourHealthCardSection = () => {
  const theme = useTheme();

  const cards = [
    {
      label: "Dental",
      icon: <LocalHospitalRounded sx={{ color: "#FFFFFF" }} />,
    },
    { label: "Eye Care", icon: <Visibility sx={{ color: "#FFFFFF" }} /> },
    {
      label: "Neurologist",
      icon: <BiotechRounded sx={{ color: "#FFFFFF" }} />,
    },
    { label: "More", icon: <MoreHorizRounded sx={{ color: "#FFFFFF" }} /> },
  ];

  return (
    <Grid
      container
      sx={{
        height: "100%",
      }}
    >
      {cards.map((card, item) => (
        <Grid
          item
          size={{ xs: 6 }}
          key={item}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: theme.palette.primary.main,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "90%",
              width: "90%",
            }}
          >
            <IconButton>{card?.icon}</IconButton>
            <Typography
              fontSize="14px"
              fontWeight={600}
              textAlign="center"
              sx={{
                color: theme.palette.primary.bgcolor_1,
              }}
            >
              {card.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FourHealthCardSection;
