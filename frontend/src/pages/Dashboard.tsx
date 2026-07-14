import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { useRooms } from "../hooks/useRooms";
import { useMeetings } from "../hooks/useMeetings";
import { useOptimization } from "../hooks/useOptimization";
import type { Meeting } from "../types/meeting";
import RoomCapacityChart from "../components/charts/RoomCapacityChart";

export default function Dashboard() {
  const { data: rooms = [] } = useRooms();
  const { data: meetings = [] as Meeting[] } =
  useMeetings();
  const { data: results = [] } = useOptimization();

  const utilization = rooms.length
    ? Math.round((results.length / rooms.length) * 100)
    : 0;

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        <Card>
          <CardContent>
            <Typography color="text.secondary">Rooms</Typography>
            <Typography variant="h3">{rooms.length}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">Meetings</Typography>
            <Typography variant="h3">{meetings.length}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">Optimized</Typography>
            <Typography variant="h3">{results.length}</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">Utilization</Typography>
            <Typography variant="h3">{utilization}%</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
          },
          gap: 3,
          mt: 3,
        }}
      >
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Room Capacity
          </Typography>

          <RoomCapacityChart rooms={rooms} />
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Recent Meetings
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Organizer</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {meetings.slice(0, 5).map((meeting) => (
                <TableRow key={meeting.id}>
                  <TableCell>{meeting.title}</TableCell>
                  <TableCell>{meeting.organizer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
}