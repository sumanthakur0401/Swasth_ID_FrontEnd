import { Box } from "@mui/material";
import LeftSection from "./SigninSides/LeftSection";
import RightSection from "./SigninSides/RightSection";


export const Signin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LeftSection />
      <RightSection />
    </Box>
  );
};
