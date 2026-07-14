import { useQuery } from "@tanstack/react-query";
import { getMeetings } from "../api/meetings";
import type { Meeting } from "../types/meeting";

export function useMeetings() {
  return useQuery<Meeting[]>({
    queryKey: ["meetings"],
    queryFn: getMeetings,
  });
}