import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";

export const Topcontainer = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              item
              size={{ xs: 12, md: 9 }}
              sx={{
                p: 2,
              }}
            >
              <LeftSection />
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <RightSection />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
