import {
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import { useQuery } from "@tanstack/react-query";

import MeetingForm from "../components/MeetingForm";

import MeetingTable from "../components/MeetingTable";

import {
  getMeetings,
} from "../api/meetings";

export default function Meetings() {

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["meetings"],

    queryFn:
      getMeetings,
  });

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Meetings
      </Typography>

      <MeetingForm />

      <br />

      {isLoading && (
        <CircularProgress />
      )}

      {error && (
        <Alert severity="error">
          Failed to load meetings
        </Alert>
      )}

      {data && (
        <MeetingTable
          meetings={data}
        />
      )}

    </Container>
  );
}