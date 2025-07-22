import {
  Box,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VerifiedIcon from "@mui/icons-material/Verified";

const PharmacySection = () => {
  const theme = useTheme();

  const iconWrapperStyle = {
    width: 28,
    height: 28,
    borderRadius: "100%",
    backgroundColor: theme.palette.primary.themeColor_3_dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    color: theme.palette.primary.bgcolor_1,
    fontSize: 18,
  };

  return (
    <Box
      sx={{
        width: 200,
        height: 250,
        borderRadius: 10,
        backgroundColor: theme.palette.primary.themeColor_3,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignContent:"center"
        }}
      >
        <Typography
          sx={{
            alignSelf:"center",
            fontSize: 26,
            fontWeight: 800,
            color: theme.palette.primary.themeColor_3_dark,
          }}
        >
          Pharmacy
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* Cart Row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={iconWrapperStyle}>
            <LocalMallIcon sx={iconStyle} />
          </Box>
          <Typography
            sx={{
              fontSize: 12,
              color: theme.palette.primary.themeColor_3_dark,
              fontWeight: 600,
            }}
          >
            Delivered to your doorstep
          </Typography>
        </Box>

        {/* Verified Row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={iconWrapperStyle}>
            <VerifiedIcon sx={iconStyle} />
          </Box>
          <Typography
            sx={{
              fontSize: 12,
              color: theme.palette.primary.themeColor_3_dark,
              fontWeight: 600,
            }}
          >
            100% genuine medicine
          </Typography>
        </Box>
      </Box>

      {/* Action Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 200,
          fontSize: 12,
          backgroundColor: theme.palette.primary.themeColor_3_dark,
          color: theme.palette.primary.bgcolor_1,
          mt: 1,
        }}
      >
        Order via Prescription
      </Button>
    </Box>
  );
};

export default PharmacySection;
