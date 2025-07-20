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
      <Box>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          {/* LOGO */}
          <Box>
            <Typography
              sx={{
                color: theme?.palette?.primary?.color_1,
                fontWeight: "bold",
                fontSize: { xs: "24px", md: "34px" },
              }}
            >
              Swasth ID
            </Typography>
          </Box>
          {/* Menus */}
          <Box
            sx={{
              border: `1px solid ${theme?.palette?.primary?.border_1}`,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
              p: 0.5,
              borderRadius: "30px",
              width: "fit-content",
            }}
          >
            {SIDEMENU?.map((item, key) => (
              <Box
                sx={{
                  bgcolor:
                    router.pathname === item.link
                      ? `${theme?.palette?.primary?.hover_1}20`
                      : theme?.palette?.primary?.bgcolor_1,
                  color: theme?.palette?.primary?.color_1,
                  border:
                    router.pathname === item.link
                      ? `1.5px solid ${theme?.palette?.primary?.hover_1}40`
                      : `1.5px solid ${theme?.palette?.primary?.bgcolor_1}`,
                  p: 1.5,
                  borderRadius: "30px",
                  "&:hover": {
                    bgcolor: `${theme?.palette?.primary?.hover_1}20`,
                    border: `1.5px solid ${theme?.palette?.primary?.hover_1}40`,
                    cursor: "pointer",
                  },
                }}
              >
                {item?.name}
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
