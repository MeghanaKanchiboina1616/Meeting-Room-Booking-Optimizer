import { useQuery } from "@tanstack/react-query";
import { optimizeSchedule } from "../api/optimizer";

export function useOptimization() {
  return useQuery({
    queryKey: ["optimization"],
    queryFn: optimizeSchedule,
  });
}