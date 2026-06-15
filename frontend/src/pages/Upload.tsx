import {
  Container,
  Typography,
} from "@mui/material";

import UploadRooms from "../components/UploadRooms";

export default function Upload() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Upload Rooms
      </Typography>

      <UploadRooms />
    </Container>
  );
}