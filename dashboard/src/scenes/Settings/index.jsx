import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";

import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import Header from "../../components/Header";

const Settings = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Settings" subtitle="" />
      </Box>

      {/* <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton> */}
    </Box>
  );
};

export default Settings;
