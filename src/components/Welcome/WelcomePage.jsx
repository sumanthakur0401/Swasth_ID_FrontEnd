import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Link as MuiLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";

const rotatingWords = [
  "Empowering",
  "Enabling",
  "Elevating",
  "Uplifting",
  "Supporting",
];
const colorKeys = ["themeColor_1", "themeColor_2", "themeColor_3"];

const WelcomePage = () => {
  const theme = useTheme();
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const SigninPage = () => {
    router.push("./auth/signin");
  };

  const currentWord = rotatingWords[wordIndex];
  const currentColor =
    theme.palette.primary[colorKeys[wordIndex % colorKeys.length]];

  useEffect(() => {
    let timeout;
    if (isDeleting) {
      if (letterIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, letterIndex - 1));
          setLetterIndex((prev) => prev - 1);
        }, 80);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }
    } else {
      if (letterIndex <= currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, letterIndex));
          setLetterIndex((prev) => prev + 1);
        }, 120);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, currentWord]);

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Integrated Fixed Header */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "transparent",
          backdropFilter: "blur(6px)",
          px: 2,
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            top: 10,
            left: 20,
          }}
        >
          <Image
            src="/assets/SwasthId_logo.png"
            alt="Swasth ID Logo"
            width={90}
            height={30}
          />
        </Box>
        <Button
          onClick={SigninPage}
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: 13,
            color: theme.palette.primary.bgcolor_1,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          Login
        </Button>
      </Box>

      {/* Top Section – Light Hero */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.bgcolor_1,
          px: 4,
          py: "8%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          src="/assets/GradiantImage.png"
          alt="Swasth ID Logo"
          width={330}
          height={240}
          mt={0}
          priority
          style={{ objectFit: "contain" }}
        />
        <Box
          fontWeight={600}
          fontSize={50}
          gutterBottom
          sx={{
            width: "100%",
            maxWidth: "800px",
            lineHeight: 1,
            margin: "0 auto",
            color: theme.palette.primary.main,
          }}
        >
          <Typography
            component="span"
            fontSize={50}
            fontWeight={600}
            sx={{
              color: currentColor,
              transition: "color 0.4s ease",
            }}
          >
            {typedText}
          </Typography>{" "}
          Better Health,
          <Typography
            fontSize={50}
            fontWeight={600}
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            One ID at a Time
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Join thousands of users improving their healthcare experience.
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              mx: 2,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.bgcolor_1,
            }}
          >
            Register as Doctor
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: 600,
              mx: 2,
              backgroundColor: theme.palette.primary.bgcolor_1,
              color: theme.palette.primary.main,
            }}
          >
            Register as Patient
          </Button>
        </Box>
      </Box>

      {/* Info Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          px: 4,
          py: 10,
        }}
      >
        <Typography variant="h4" fontWeight="600" gutterBottom>
          Why Swasth ID?
        </Typography>
        <Typography variant="body1" mb={4}>
          Swasth ID simplifies healthcare. Whether you're a patient managing
          prescriptions or a doctor accessing verified histories, our platform
          ensures security, speed, and trust.
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: "🔐 Secure Health Records",
              desc: "Access encrypted medical documents anytime, anywhere.",
            },
            {
              title: "🩺 Trusted Doctors",
              desc: "Find professionals verified by healthcare networks.",
            },
            {
              title: "📅 Appointment Tracking",
              desc: "Visualize your entire medical calendar in one place.",
            },
          ].map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: "#2c2c2c", color: "white" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#f0f0f0", px: 4, py: 6 }}>
        <Grid container spacing={2}>
          {[
            {
              title: "About Us",
              links: ["Our Mission", "Team", "Careers"],
            },
            {
              title: "Resources",
              links: ["Help Center", "Privacy Policy", "Terms & Conditions"],
            },
            {
              title: "Connect",
              links: ["Contact Us", "LinkedIn", "Twitter"],
            },
          ].map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Typography variant="subtitle1" fontWeight="600">
                {section.title}
              </Typography>
              {section.links.map((link, i) => (
                <MuiLink key={i} href="#" underline="hover">
                  {link}
                </MuiLink>
              ))}
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Swasth ID. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomePage;
