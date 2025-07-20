import { DOCTORS } from "@/constant";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Topcontainer = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              item
              size={{ xs: 12, md: 4 }}
              sx={{
                bgcolor: `${theme?.palette?.primary?.hover_1}20`,
                borderRadius: `${theme?.shape?.borderRadius_1}px`,
                p: 2,
              }}
            >
              <Typography fontSize="24px" fontWeight="light">
                Doctors
              </Typography>
              <Typography fontSize={"14px"}>
                Stay updated in your last healthcare visit.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  my: 2,
                }}
              >
                {DOCTORS?.map((item, key) => (
                  <Box
                    key={key}
                    sx={{
                      borderRadius: theme?.shape?.borderRadius_1,
                      bgcolor: "#FFFFFF",
                      p: 0.7,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "70px",
                        width: "70px",
                        borderRadius: "100px",
                        bgcolor: `${theme?.palette?.primary?.hover_1}20`,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item?.img}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                    <Box>
                      <Typography fontSize="18px" fontWeight="bold">
                        {item?.name}
                      </Typography>
                      <Typography
                        fontSize={"14px"}
                        fontWeight={"medium"}
                      >{`${item?.stream} • ${item?.joining_date}`}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}></Grid>
            <Grid item size={{ xs: 12, md: 4 }}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
