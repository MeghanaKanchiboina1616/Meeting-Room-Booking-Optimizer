import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EventIcon from "@mui/icons-material/Event";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { Link, useLocation } from "react-router-dom";

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
    icon: <AutoFixHighIcon />,
  },
  {
    text: "Upload",
    path: "/upload",
    icon: <UploadFileIcon />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: 240,
          bgcolor: "#1E293B",
          color: "#fff",
          borderRight: "none",
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Meeting Optimizer
        </Typography>
      </Box>

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
                bgcolor: "#334155",
              },

              "&.Mui-selected": {
                bgcolor: "#3B82F6",
              },

              "&.Mui-selected:hover": {
                bgcolor: "#2563EB",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
                minWidth: 40,
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
  );
}