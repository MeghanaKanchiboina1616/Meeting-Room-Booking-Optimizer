export interface OptimizationResult {
  meeting_id: number;
  meeting_title: string;
  participants: number;
  room_id: number;
  room_name: string;
  building: string;
  capacity: number;
  objective_score: number;
}