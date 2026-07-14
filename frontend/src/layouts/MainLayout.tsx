import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EventIcon from "@mui/icons-material/Event";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { Outlet, Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

  export default function MainLayout() {
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      text: "Rooms",
      path: "/rooms",
      icon: <MeetingRoomIcon />,
    },
    {
      text: "Meetings",
      path: "/meetings",
      icon: <EventIcon />,
    },
    {
      text: "Optimizer",
      path: "/optimizer",
      icon: <AutoAwesomeIcon />,
    },
    {
      text: "Upload",
      path: "/upload",
      icon: <UploadFileIcon />,
    },
    
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background:
              "linear-gradient(180deg,#0F172A,#1E293B)",
            color: "#fff",
            borderRight: "none",
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Meeting Optimizer
          </Typography>
        </Toolbar>

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              selected={
                location.pathname === item.path
              }
              sx={{
                mx: 1,
                mb: 1,
                borderRadius: 2,

                "&:hover": {
                  backgroundColor:
                    "rgba(255,255,255,0.12)",
                },

                "&.Mui-selected": {
                  backgroundColor:
                    "#053595",
                },

                "&.Mui-selected:hover": {
                  backgroundColor:
                    "#2758b9",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          p: 4,
          backgroundColor: "#F3F6FA",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}