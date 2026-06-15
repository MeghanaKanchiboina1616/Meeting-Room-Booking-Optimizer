import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Meeting {
  id: number;
  title: string;
  organizer: string;
  participants: number;
  duration: number;

  preferences: {
    projector: boolean;
    preferred_building: string;
  };
}

interface Props {
  meetings: Meeting[];
}

export default function MeetingTable({
  meetings,
}: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>

            <TableCell>
              Title
            </TableCell>

            <TableCell>
              Organizer
            </TableCell>

            <TableCell>
              Participants
            </TableCell>

            <TableCell>
              Duration
            </TableCell>

            <TableCell>
              Preferences
            </TableCell>
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
                  {
                    meeting.organizer
                  }
                </TableCell>

                <TableCell>
                  {
                    meeting.participants
                  }
                </TableCell>

                <TableCell>
                  {
                    meeting.duration
                  } min
                </TableCell>

                <TableCell>
                  {meeting
                    .preferences
                    ?.projector &&
                    "📽️ "}

                  {meeting
                    .preferences
                    ?.preferred_building ||
                    "Any"}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>

      </Table>
    </TableContainer>
  );
}