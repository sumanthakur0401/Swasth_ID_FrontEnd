import {
  Box,
  Typography,
  Select,
  MenuItem,
  useTheme,
  Container,
} from "@mui/material";
import { useState } from "react";


const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const CalendarSection = () => {
  const theme = useTheme();
  const year = 2025;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState(6); // July = 6

  const appointmentStyles = {
    missed: theme.palette.primary.themeColor_3,
    attended: theme.palette.primary.themeColor_2,
    upcoming: theme.palette.primary.themeColor_1,
  };

  const appointmentStatus = {
    6: {
      5: "missed",
      12: "attended",
      27: "upcoming",
    },
    7: {},
    8: {},
  };

  const daysInMonth = getDaysInMonth(year, selectedMonth);
  const firstDayOffset = getFirstDayOfMonth(year, selectedMonth);

  const calendarDays = Array.from(
    { length: firstDayOffset + daysInMonth },
    (_, i) => {
      const day = i - firstDayOffset + 1;
      return day > 0 ? day : null;
    }
  );

  return (
    <Box
      sx={{
        width: "250px",
        height: "250px",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        p: 1.5,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          px:1,
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 800,
            color: theme.palette.primary.main,
          }}
        >
          Schedule
        </Typography>
        <Select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          size="small"
          sx={{
            height: 30,
            fontWeight: 400,
            fontSize: "14px",
            borderRadius: 10,
            border: "none",
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.bgcolor_1,
          }}
        >
          {months.map((month, idx) => (
            <MenuItem key={month} value={idx}>
              {month} {year}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Weekday Headers */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
          mb: 1,
        }}
      >
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <Typography
            key={day}
            fontSize="14px"
            fontWeight={500}
            textAlign="center"
            color="text.secondary"
          >
            {day}
          </Typography>
        ))}
      </Box>

      {/* Calendar Days */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
        }}
      >
        {calendarDays.map((day, i) => {
          const status = day && appointmentStatus[selectedMonth]?.[day];
          const isHighlighted = !!status;
          const bgColor = isHighlighted
            ? appointmentStyles[status]
            : theme.palette.primary.bgcolor_1;

          return (
            <Box
              key={i}
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                backgroundColor: bgColor,
                color: isHighlighted
                  ? theme.palette.primary.contrastText
                  : theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: isHighlighted ? 700 : 400,
                fontSize: "14px",
                boxShadow: isHighlighted
                  ? "0px 0px 6px rgba(0,0,0,0.2)"
                  : "none",
                cursor: isHighlighted ? "pointer" : "default",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: isHighlighted
                    ? theme.palette.primary.main
                    : bgColor,
                },
              }}
            >
              {day || ""}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CalendarSection;
