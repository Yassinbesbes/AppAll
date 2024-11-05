import {
  Box,
  IconButton,
  useTheme,
  Snackbar,
  Alert,
  InputBase,
  Avatar,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import Badge from "@mui/material/Badge";
import { ColorModeContext, tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import adminDetails from "../../data/admin.js"; // Importing admin details
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      borderBottom="0.5px solid #E0E0E0"
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        position="relative"
        backgroundColor={colors.primary[400]}
        borderRadius="20px"
        border="0.25px solid #E0E0E0"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>

        <InputBase
          sx={{ flex: 1 }}
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" mr={2}>
          <Avatar src={adminDetails.imageUrl} alt={adminDetails.name} />
          <Box ml={2}>
            <Typography variant="body1">{adminDetails.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {adminDetails.role}
            </Typography>
          </Box>
        </Box>

        <IconButton>
          <Badge badgeContent={4} color="primary">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>

      {error && (
        <Snackbar
          open={Boolean(error)}
          autoHideDuration={6000}
          onClose={() => setError("")}
        >
          <Alert
            onClose={() => setError("")}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default Topbar;
