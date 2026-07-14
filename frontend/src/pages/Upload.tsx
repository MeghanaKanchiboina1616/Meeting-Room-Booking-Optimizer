import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import UploadRooms from "../components/UploadRooms";

export default function Upload() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "#111827",
            mb: 1,
          }}
        >
          Upload Rooms
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
            fontSize: "1rem",
          }}
        >
          Upload an Excel file containing room details for optimization.
        </Typography>
      </Box>

      <Card
        sx={{
          maxWidth: 800,
          borderRadius: 4,
          boxShadow: 4,
          backgroundColor: "#FFFFFF",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: "#1F2937",
            }}
          >
            Room Data Import
          </Typography>

          <UploadRooms />
        </CardContent>
      </Card>
    </Container>
  );
}