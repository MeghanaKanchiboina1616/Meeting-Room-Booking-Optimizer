import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface OptimizationResult {
  meeting_id: number;
  meeting_title: string;
  participants: number;
  room_id: number;
  room_name: string;
  building: string;
  capacity: number;
  objective_score: number;
}

interface Props {
  results: OptimizationResult[];
}

export default function OptimizerTable({
  results,
}: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Meeting</TableCell>
            <TableCell>Participants</TableCell>
            <TableCell>Assigned Room</TableCell>
            <TableCell>Building</TableCell>
            <TableCell>Room Capacity</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {results.map((result) => (
            <TableRow key={result.meeting_id}>
              <TableCell>
                {result.meeting_title}
              </TableCell>

              <TableCell>
                {result.participants}
              </TableCell>

              <TableCell>
                {result.room_name}
              </TableCell>

              <TableCell>
                {result.building}
              </TableCell>

              <TableCell>
                {result.capacity}
              </TableCell>

              <TableCell>
                {result.objective_score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}