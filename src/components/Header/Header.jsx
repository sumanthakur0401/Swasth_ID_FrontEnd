import { SIDEMENU } from "@/constant";
import { Notifications, Search } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  console.log(router?.pathname);
  return (
    <>
      <Box
        sx={{
          px: 8
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              height: "40px", // Match profile button height
              width: "130px",
            }}
          >
            <Image
              src="/assets/SwasthId_logo.png"
              alt="Swasth ID Logo"
              width={130} // Slightly reduced for tighter fit
              height={40} // Matches button visual weight
              priority
              style={{
                objectFit: "contain", // Prevent stretching
                display: "block",
              }}
            />
          </Box>
          {/* Menus */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            {SIDEMENU?.map((item, key) => (
              <Box
                sx={{
                  bgcolor:
                    router.pathname === item.link
                      ? theme?.palette?.primary?.hover_1
                      : theme?.palette?.primary?.bgcolor_1,
                  color:
                    router.pathname === item.link
                      ? theme.palette.primary.bgcolor_1
                      : theme.palette.primary.hover_1,
                  p: 1,
                  px: 3,
                  borderRadius: "30px",
                  display: "flex", // 🔥 Added for alignment
                  alignItems: "center", // 🔥 Vertically center icon & text
                  gap: 1, // 🔥 Space between icon and text
                  "&:hover": {
                    bgcolor: theme?.palette?.primary?.hover_1,
                    color: theme?.palette?.primary?.color_2,
                    cursor: "pointer",
                  },
                }}
              >
                {item?.icon}
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item?.name}
                </Typography>
              </Box>
            ))}
          </Box>
          {/* Profile */}
          <Box
            sx={{
              border: `1px solid ${theme?.palette?.primary?.border_1}`,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              p: 0.5,
              borderRadius: "30px",
              width: "fit-content",
            }}
          >
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <Notifications />
            </IconButton>
            <Box
              sx={{
                position: "relative",
                height: "40px",
                width: "40px",
                borderRadius: "50px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/profile/profile.jpeg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
