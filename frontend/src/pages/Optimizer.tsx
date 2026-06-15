import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

import { useMutation } from "@tanstack/react-query";

import { optimizeSchedule } from "../api/optimizer";

import OptimizerTable from "../components/OptimizerTable";

export default function Optimizer() {

  const mutation = useMutation({
    mutationFn: optimizeSchedule,
  });

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Meeting Room Optimizer
      </Typography>

      <Button
        variant="contained"
        onClick={() =>
          mutation.mutate()
        }
      >
        Optimize Schedule
      </Button>

      <br />
      <br />

      {mutation.isPending && (
        <CircularProgress />
      )}

      {mutation.isError && (
        <Alert severity="error">
          Optimization failed
        </Alert>
      )}

      {mutation.data && (
        <OptimizerTable
          results={mutation.data}
        />
      )}

    </Container>
  );
}