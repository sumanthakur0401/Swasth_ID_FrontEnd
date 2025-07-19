import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  InputBase,
  Typography,
  useTheme,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Signin = () => {
  const theme = useTheme();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the global error on change
    setErrorMessage("");
  };

  const handleValidations = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (handleValidations()) {
      router.push("/dashboard");
    }
  };

  const inputStyle = {
    border: `1px solid ${theme.palette.primary.lightGrey}`,
    py: 0.5,
    px: 1,
    borderRadius: "7px",
  };

  return (
    <>
      <Box
        sx={{
          py: 4,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Card elevation={2} sx={{ borderRadius: "12px" }}>
            <CardContent>
              <Typography fontSize="1.5rem">Welcome To Swast Id</Typography>
              <Typography>Sign in to your Swasth ID account</Typography>

              {/* ✅ Alert shown here if there's an error */}
              {errorMessage && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {errorMessage}
                </Alert>
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mt: 3,
                }}
              >
                <InputBase
                  name="email"
                  type="email"
                  placeholder="type your email..."
                  value={formData.email}
                  fullWidth
                  onChange={handleChange}
                  sx={inputStyle}
                />

                <InputBase
                  name="password"
                  type="password"
                  placeholder="type your password..."
                  value={formData.password}
                  fullWidth
                  onChange={handleChange}
                  sx={inputStyle}
                />

                <Button
                  fullWidth
                  onClick={handleSubmit}
                  sx={{
                    textTransform: "none",
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};
