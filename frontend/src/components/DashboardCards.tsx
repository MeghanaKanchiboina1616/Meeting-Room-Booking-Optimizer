import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  totalRooms: number;
  totalMeetings: number;
  optimizedMeetings: number;
}

export default function DashboardCards({
  totalRooms,
  totalMeetings,
  optimizedMeetings,
}: Props) {
  const cards = [
    {
      title: "Total Rooms",
      value: totalRooms,
    },
    {
      title: "Total Meetings",
      value: totalMeetings,
    },
    {
      title:
        "Optimized Meetings",
      value:
        optimizedMeetings,
    },
  ];

  return (
    <Grid
      container
      spacing={3}
    >
      {cards.map((card) => (
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
          key={card.title}
        >
          <Card
            elevation={4}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
              >
                {card.title}
              </Typography>

              <Typography
                variant="h3"
              >
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}