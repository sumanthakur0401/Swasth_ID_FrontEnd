import useGreeting from "@/hooks/getGreeting";
import useTodayDate from "@/hooks/useTodaysDate";
import { Home } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export const Profile = () => {
  let greeting = useGreeting();
  let todaysDate = useTodayDate();
  const theme = useTheme();
  return (
    <>
      <Box>
        <Container maxWidth="xl" sx={{ my: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mt: { xs: 2, md: 0 } }}>
              <Typography sx={{ fontSize: "16px" }}>{greeting},</Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "bolder",
                  mt: -1,
                }}
              >
                Suman Thakur
              </Typography>
            </Box>

            <Box
              sx={{
                border: `1px solid ${theme?.palette?.primary?.border_1}`,
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 0.5,
                borderRadius: "30px",
                width: "fit-content",
              }}
            >
              <IconButton
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={{
                  bgcolor: theme?.palette?.primary?.hover_1,
                  color: theme?.palette?.primary?.bgcolor_1,
                  cursor: "default",
                  "&:hover": {
                    bgcolor: theme?.palette?.primary?.hover_1,
                    color: theme?.palette?.primary?.bgcolor_1,
                  },
                }}
              >
                <Home fontSize="small" />
              </IconButton>
              <Typography sx={{ pr: 1 }} fontSize="14px">
                {todaysDate}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
