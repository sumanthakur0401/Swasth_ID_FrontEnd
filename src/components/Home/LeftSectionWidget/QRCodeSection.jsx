import { Box, Typography, useTheme, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const QRCodeSection = ({ userId = "SwasthID-027", correctPin = "0000" }) => {
  const theme = useTheme();

  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [timer, setTimer] = useState(null);

  // Automatically unlock once full PIN is typed
  useEffect(() => {
    if (pin.length === 4) {
      if (pin === correctPin) {
        setPinError(false);
        setShowQR(true);

        const timeout = setTimeout(() => {
          setShowQR(false);
          setPin("");
        }, 10000);

        setTimer(timeout);
      } else {
        setPinError(true);
      }
    }
  }, [pin]);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        height: "100%",
        p: 2,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: theme.palette.primary.main,
        }}
      >
        Your QR Code
      </Typography>
      <Box
        sx={{
          width: 150,
          height: 150,
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => !showQR && setShowQR("input")}
      >
        <img
          src="/assets/QR/QRCode1.png"
          alt="QR Code"
          style={{
            width: "150px",
            height: "150px",
            filter: showQR === true ? "none" : "blur(6px)",
            transition: "filter 0.4s ease",
          }}
        />

        {showQR === "input" && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255,255,255,0.85)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              px: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: pinError
                  ? theme.palette.primary.themeColor_3
                  : theme.palette.primary.themeColor_1,
              }}
            >
              Enter 4-digit PIN
            </Typography>

            <TextField
              variant="outlined"
              type="password"
              inputProps={{ maxLength: 4 }}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              fullWidth
              sx={{
                input: {
                  textAlign: "center",
                  fontWeight: 600,
                  letterSpacing: "5px",
                  fontSize: "18px",
                  padding: "10px 0",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderWidth: 2.5,
                    borderColor: pinError
                      ? theme.palette.primary.themeColor_3
                      : theme.palette.primary.themeColor_1,
                  },
                },
              }}
            />
          </Box>
        )}
      </Box>

      <Typography
        sx={{
          fontSize: 14,
          color: theme.palette.primary.main,
        }}
      >
        ID: {userId}
      </Typography>
    </Box>
  );
};

export default QRCodeSection;
