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
      {/* Info Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          px: 4,
          py: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="700"
          gutterBottom
          textAlign="center"
        >
          Why Choose Swasth ID?
        </Typography>
        <Typography
          variant="h6"
          mb={6}
          sx={{
            maxWidth: "800px",
            textAlign: "center",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Swasth ID transforms healthcare into a secure, connected, and
          personalized experience. Whether you're a patient or a provider, we
          simplify your journey with trust and technology.
        </Typography>

        {/* Vertically stacked cards */}
        {[
          {
            title: "🔐 Secure Records",
            desc: "Encrypted access to your health history with full privacy control. Your Swasth ID ensures that only authorized professionals can view your medical documents.",
            color: theme.palette.primary.themeColor_1,
          },
          {
            title: "🩺 Verified Doctors",
            desc: "Consult trusted professionals with verified credentials. Our network includes specialists across fields, all vetted for quality and experience.",
            color: theme.palette.primary.themeColor_2,
          },
          {
            title: "📅 Smart Scheduling",
            desc: "Track appointments and receive timely reminders. Our calendar syncs with your health timeline so you never miss a checkup or consultation.",
            color: theme.palette.primary.themeColor_3,
          },
        ].map((card, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: card.color,
              color: theme.palette.primary.bgcolor_1,
              borderRadius: 3,
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
              width: "100%",
              maxWidth: "600px",
              height: "200px",
              mb: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
              py: 3,
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {card.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
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
