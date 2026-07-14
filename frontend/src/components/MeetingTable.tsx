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

interface Meeting {
  id: number;
  title: string;
  organizer: string;
  participants: number;
  duration: number;
  is_completed: boolean;

  preferences: {
    projector: boolean;
    preferred_building: string;
  };
}

interface Props {
  meetings: Meeting[];

  onComplete: (
    id: number
  ) => void;

  onDelete: (
    id: number
  ) => void;
}

export default function MeetingTable({
  meetings,
  onComplete,
  onDelete,
}: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Organizer</TableCell>
            <TableCell>Participants</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Preferences</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {meetings.map(
            (meeting) => (
              <TableRow
                key={meeting.id}
              >

                <TableCell>
                  {meeting.id}
                </TableCell>

                <TableCell>
                  {meeting.title}
                </TableCell>

                <TableCell>
                  {meeting.organizer}
                </TableCell>

                <TableCell>
                  {meeting.participants}
                </TableCell>

                <TableCell>
                  {meeting.duration}
                  {" "}min
                </TableCell>

                <TableCell>
                  {meeting.preferences
                    ?.projector &&
                    "📽️ "}

                  {meeting.preferences
                    ?.preferred_building ||
                    "Any"}
                </TableCell>

                <TableCell>
                  {meeting.is_completed
                    ? "Completed"
                    : "Pending"}
                </TableCell>

                <TableCell>

                  <Stack
                    direction="row"
                    spacing={1}
                  >

                    {!meeting.is_completed ? (
                      <Button
                        color="success"
                        variant="contained"
                        onClick={() =>
                          onComplete(
                            meeting.id
                          )
                        }
                      >
                        Complete
                      </Button>
                    ) : (
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() =>
                          onDelete(
                            meeting.id
                          )
                        }
                      >
                        Delete
                      </Button>
                    )}

                  </Stack>

                </TableCell>

              </TableRow>
            )
          )}
        </TableBody>

      </Table>
    </TableContainer>
  );
}