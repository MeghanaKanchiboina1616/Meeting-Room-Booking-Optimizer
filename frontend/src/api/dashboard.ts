import { getRooms } from "./rooms";
import { getMeetings } from "./meetings";
import { optimizeSchedule } from "./optimizer";

export const getDashboardData = async () => {
  const [rooms, meetings, optimizations] =
    await Promise.all([
      getRooms(),
      getMeetings(),
      optimizeSchedule(),
    ]);

  return {
    totalRooms: rooms.length,
    totalMeetings: meetings.length,
    optimizedMeetings:
      optimizations.length,
  };
};