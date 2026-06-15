import {
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import { useQuery } from "@tanstack/react-query";

import DashboardCards from "../components/DashboardCards";

import {
  getDashboardData,
} from "../api/dashboard";

export default function Dashboard() {

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "dashboard",
    ],

    queryFn:
      getDashboardData,
  });

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Dashboard
      </Typography>

      {isLoading && (
        <CircularProgress />
      )}

      {error && (
        <Alert severity="error">
          Failed to load dashboard
        </Alert>
      )}

      {data && (
        <DashboardCards
          totalRooms={
            data.totalRooms
          }
          totalMeetings={
            data.totalMeetings
          }
          optimizedMeetings={
            data.optimizedMeetings
          }
        />
      )}
    </Container>
  );
}