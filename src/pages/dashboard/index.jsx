import { Layout } from "@/components/Layout/Layout";
import { LeftSection } from "@/components/Home/LeftSection";
import { RightSection } from "@/components/Home/RightSection";
import { Box } from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          height: "85vh",
          px:8,
          overflow: "hidden",
        }}
      >
        {/* Left Section – 70% */}
        <Box
          sx={{
            width: { xs: "100%", md: "75%" },
            height: "100%",
            p: 1,
            
            overflowY: "auto",
          }}
        >
          <LeftSection />
        </Box>

        {/* Right Section – 30% */}
        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            height: "100%",
            p: 1,
            overflowY: "auto",
          }}
        >
          <RightSection />
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
