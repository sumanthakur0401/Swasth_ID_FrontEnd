import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Profile = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl" sx={{ my: 5 }}>
          <Typography sx={{ fontSize: "20px" }}>Greetings</Typography>
          <Typography sx={{ fontSize: "32px", fontWeight: "bolder" }}>
            Suman Thakur
          </Typography>
        </Container>
      </Box>
    </>
  );
};
