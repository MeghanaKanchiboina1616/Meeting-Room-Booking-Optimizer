import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
} from "@mui/material";

interface Room {
  id: number;
  name: string;
  capacity: number;
  building: string;
  is_active: boolean;

  equipment: {
    projector: boolean;
    whiteboard: boolean;
    video: boolean;
  };
}

interface Props {
  rooms: Room[];

  onDisable: (id: number) => void;

  onEnable: (id: number) => void;

  onDelete: (id: number) => void;
}

export default function RoomTable({
  rooms,
  onDisable,
  onEnable,
  onDelete,
}: Props) {
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
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
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

              <TableCell>
                {room.is_active
                  ? "Available"
                  : "Unavailable"}
              </TableCell>

              <TableCell>

                <Stack
                  direction="row"
                  spacing={1}
                >
                  {room.is_active ? (
                    <Button
                      color="warning"
                      variant="contained"
                      onClick={() =>
                        onDisable(room.id)
                      }
                    >
                      Disable
                    </Button>
                  ) : (
                    <>
                      <Button
                        color="success"
                        variant="contained"
                        onClick={() =>
                          onEnable(room.id)
                        }
                      >
                        Enable
                      </Button>

                      <Button
                        color="error"
                        variant="contained"
                        onClick={() =>
                          onDelete(room.id)
                        }
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </Stack>

              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}