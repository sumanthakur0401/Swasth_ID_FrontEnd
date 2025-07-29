import { Box, Button } from "@mui/material";
import LeftSection from "./SigninSides/LeftSection";
import RightSection from "./SigninSides/RightSection";
import Image from "next/image";
import theme from "@/theme/theme";

const Signin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "transparent",

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
            src="/assets/SwasthId_logo_light.png"
            alt="Swasth ID Logo"
            width={90}
            height={30}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: 13,
            color: theme.palette.primary.bgcolor_1,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          Create New Account
        </Button>
      </Box>
      <LeftSection />
      <RightSection />
    </Box>
  );
};
export default Signin;
