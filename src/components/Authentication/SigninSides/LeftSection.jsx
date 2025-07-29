import { Box, Typography, Button, useTheme } from "@mui/material";
import Image from "next/image"; // ✅ Only if you're using Next.js

const LeftSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "50%",
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        position: "relative", // ✅ Important for logo positioning
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 4,
      }}
    >
      {/* Logo in top-left corner */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 20,
        }}
      >
        <Image
          src="/assets/SwasthId_logo_light.png"
          alt="Swasth ID Logo"
          width={100}
          height={35}
        />
      </Box>

      <Typography
        fontSize="2rem"
        fontWeight={600}
        sx={{
          color: theme.palette.primary.bgcolor_1,
        }}
      >
        For Doctors
      </Typography>
      <Typography
        fontSize={20}
        textAlign="center"
        maxWidth="70%"
        fontWeight={200}
        sx={{
          color: theme.palette.primary.bgcolor_1,
        }}
      >
        Access your patients' appointments, prescriptions, and medical records
        securely.
      </Typography>

      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          fontWeight: 600,
          mt: 2,
          backgroundColor: theme.palette.primary.bgcolor_1,
        }}
      >
        Login as Doctor
      </Button>
    </Box>
  );
};

export default LeftSection;
