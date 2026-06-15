import { useQuery } from "@tanstack/react-query";

import {
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import RoomTable from "../components/RoomTable";

import { getRooms } from "../api/rooms";

export default function Rooms() {

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">
        Failed to load rooms
      </Alert>
    );
  }

  return (
    <Container>

      <Typography
        variant="h4"
        gutterBottom
      >
        Rooms
      </Typography>

      <RoomTable rooms={data ?? []} />

    </Container>
  );
}
