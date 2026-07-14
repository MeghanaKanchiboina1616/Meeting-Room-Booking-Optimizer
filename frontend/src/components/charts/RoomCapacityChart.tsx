import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Room {
  id: number;
  name: string;
  capacity: number;
}

interface Props {
  rooms: Room[];
}

export default function RoomCapacityChart({
  rooms,
}: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={rooms}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar
          dataKey="capacity"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}