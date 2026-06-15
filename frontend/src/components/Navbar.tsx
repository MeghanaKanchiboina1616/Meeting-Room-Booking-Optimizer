import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Dashboard
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/rooms"
        >
          Rooms
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/meetings"
        >
          Meetings
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/optimizer"
        >
          Optimizer
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/upload"
          >
        Upload
        </Button>
      </Toolbar>
    </AppBar>
  );
}