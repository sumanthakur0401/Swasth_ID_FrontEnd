import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export const RightSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        paddingTop: "10px",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with arrow icon */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          pb: 1,
        }}
      >
        <Typography fontSize="24px" width="50%" lineHeight={1.2} px={1} py={1}>
          Upcoming Appointment
        </Typography>
        <IconButton
          sx={{
            backgroundColor: theme.palette.primary.bgcolor_1,
            borderRadius: "50%",
            width: 36,
            height: 36,
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      {/* Content Card */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom right, #fdfcffff, #e1deefff)",
          borderRadius: "10px",
          p: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        {/* Doctor Name */}
        <Typography fontSize="26px" fontWeight={600}>
          Dr. Suman Thakur
        </Typography>

        {/* Specialty */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: theme.palette.primary.themeColor_1,
            px: 2,
            py: 0.5,
            borderRadius: 10,
            width: "fit-content",
          }}
        >
          <MedicalServicesIcon
            sx={{ color: theme.palette.primary.bgcolor_2, fontSize: 16 }}
          />
          <Typography
            fontSize="14px"
            fontWeight="medium"
            sx={{ color: theme.palette.primary.bgcolor_2 }}
          >
            Dentist
          </Typography>
        </Box>

        {/* Doctor Image */}
        <Box
          sx={{
            height: "180px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            src="/assets/doc1.png"
            alt="Doctor"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </Box>

        {/* About Doctor */}
        <Box>
          <Typography fontSize="16px" mb={0.5}>
            About Doctor
          </Typography>
          <Typography color="text.secondary" fontSize="14px">
            Dr. Suman Thakur is a certified dental surgeon with 12+ years of
            experience in cosmetic and restorative dentistry.
          </Typography>
        </Box>

        {/* Appointment Details */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarTodayIcon fontSize="small" />
            <Typography fontSize="14px" fontWeight={600}>
              27 July 2025
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTimeIcon fontSize="small" />
            <Typography fontSize="14px" fontWeight={600}>
              04:30 PM
            </Typography>
          </Box>
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            textTransform: "none",
            py: 1.2,
            fontWeight: 500,
            fontSize: "15px",
            borderRadius: 10,
          }}
        >
          Check Appointments
        </Button>
      </Box>
    </Box>
  );
};
