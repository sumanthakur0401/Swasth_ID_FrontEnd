import { Box, Typography, Button, useTheme } from "@mui/material";
import { useRouter } from "next/router";

const RightSection = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <Box
      sx={{
        width: "50%",
        height: "100vh",
        backgroundColor: theme.palette.primary.bgcolor_1,
        position: "relative", // ✅ enable absolute positioning for top button
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 4,
      }}
    >
      {/* Main Content */}
      <Typography
        fontSize="2rem"
        fontWeight={600}
        sx={{ color: theme.palette.primary.main }}
      >
        For Individuals
      </Typography>
      <Typography
        fontSize={20}
        fontWeight={200}
        textAlign="center"
        maxWidth="70%"
        sx={{ color: theme.palette.primary.main }}
      >
        Manage appointments, access your health records, and consult verified
        doctors.
      </Typography>

      <Button
        variant="outlined"
        onClick={handleLogin}
        sx={{
          textTransform: "none",
          fontWeight: 600,
          mt: 2,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.bgcolor_1,
        }}
      >
        Login as Patient
      </Button>
    </Box>
  );
};

export default RightSection;
