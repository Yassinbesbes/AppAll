import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        marginBottom: "10px",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          backgroundColor: "#8280FF !important",
          color: "white !important",
          borderRadius: "20px !important",
        },
        "& .pro-menu-item.active": {
          backgroundColor: "#8280FF !important",
          color: "white !important",
          borderRadius: "20px !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "4px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" alignItems="center" ml="15px">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "5.5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users"
              to="/Users"
              icon={<PeopleOutlineRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Articles"
              to=""
              icon={<StorageRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Archive"
              to="/History"
              icon={<Inventory2RoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Box onClick={handleOpen}>
              <Item
                title="Se Déconnecter"
                to="#"
                icon={<LogoutRoundedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
      {/* <Signout open={open} handleClose={handleClose} handleSignout={handleSignout} /> */}
    </Box>
  );
};

export default Sidebar;
