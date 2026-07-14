import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import RoomTable from "../components/RoomTable";

import {
  getRooms,
  enableRoom,
  disableRoom,
  deleteRoom,
} from "../api/rooms";

export default function Rooms() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const enableMutation = useMutation({
    mutationFn: enableRoom,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      }),
  });

  const disableMutation = useMutation({
    mutationFn: disableRoom,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      }),
  });

  if (isLoading) return <CircularProgress />;

  if (error)
    return (
      <Alert severity="error">
        Failed to load rooms
      </Alert>
    );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rooms
      </Typography>

      <RoomTable
        rooms={data ?? []}
        onEnable={(id) =>
          enableMutation.mutate(id)
        }
        onDisable={(id) =>
          disableMutation.mutate(id)
        }
        onDelete={(id) =>
          deleteMutation.mutate(id)
        }
      />
    </Container>
  );
}