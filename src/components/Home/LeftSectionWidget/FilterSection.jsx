import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import SortIcon from "@mui/icons-material/Sort";
import theme from "@/theme/theme";

export const FilterSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left Side */}
      <Typography fontSize="20px" fontWeight={200}>
        You have <span style={{ fontWeight: 400 }}>1 appointment</span> today
      </Typography>

      {/* Right Side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 2,
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <TextField
          placeholder="Search..."
          size="small"
          variant="standard" // 👈 softer look
          sx={{
            width: "50%",
            backgroundColor: theme.palette.primary.bgcolor_1,
            borderRadius: 10,
            px:2,
            py:.5
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            disableUnderline: true, // ✅ hide default line for standard variant
          }}
        />

        <Button
          size="small"
          startIcon={<TuneIcon />}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            px:2,
            py:.5,
            textTransform: "none",
            color: theme?.palette?.primary?.main,
          }}
        >
          Filter
        </Button>
        <Button
          size="small"
          startIcon={<SortIcon />}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            px:2,
            py:.5,
            textTransform: "none",
            color: theme?.palette?.primary?.main,
          }}
        >
          Sort By
        </Button>
      </Box>
    </Box>
  );
};
