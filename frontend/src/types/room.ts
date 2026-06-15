export interface Room {
    id: number;
    name: string;
    capacity: number;
    building: string;
    equipment: {
        projector: boolean;
        whiteboard: boolean;
        video: boolean;
    };
}