import {
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import MeetingForm from "../components/MeetingForm";
import MeetingTable from "../components/MeetingTable";

import {
  getMeetings,
  completeMeeting,
  deleteMeeting,
} from "../api/meetings";

export default function Meetings() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["meetings"],
    queryFn: getMeetings,
  });

  const completeMutation = useMutation({
    mutationFn: completeMeeting,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["meetings"],
      }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteMeeting,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["meetings"],
      }),
  });

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Meetings
      </Typography>

      <MeetingForm />

      <br />

      {isLoading && <CircularProgress />}

      {error && (
        <Alert severity="error">
          Failed to load meetings
        </Alert>
      )}

      {data && (
        <MeetingTable
          meetings={data}
          onComplete={(id) =>
            completeMutation.mutate(id)
          }
          onDelete={(id) =>
            deleteMutation.mutate(id)
          }
        />
      )}
    </Container>
  );
}