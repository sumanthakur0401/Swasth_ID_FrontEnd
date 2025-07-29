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
              size={{ xs: 12, md: 9.5 }}
              sx={{
                p: 1,
              }}
            >
              <LeftSection />
            </Grid>
            <Grid item size={{ xs: 12, md: 2.5 }}>
              <RightSection />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
