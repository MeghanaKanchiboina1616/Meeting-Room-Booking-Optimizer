export interface Meeting {
  id?: number;
  title: string;
  organizer: string;
  participants: number;
  duration: number;
  preferences: {
    projector: boolean;
    preferred_building: string;
  };
}