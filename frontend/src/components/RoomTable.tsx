import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Room {
  id: number;
  name: string;
  capacity: number;
  building: string;
  equipment: {
    projector: boolean;
    whiteboard: boolean;
    video: boolean;
  };
}

interface Props {
  rooms: Room[];
}

export default function RoomTable({ rooms }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Building</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Equipment</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.id}>
              <TableCell>{room.id}</TableCell>
              <TableCell>{room.name}</TableCell>
              <TableCell>{room.building}</TableCell>
              <TableCell>{room.capacity}</TableCell>
              <TableCell>
                {room.equipment?.projector ? "📽️" : ""}
                {room.equipment?.whiteboard ? " 📝" : ""}
                {room.equipment?.video ? " 🎥" : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}