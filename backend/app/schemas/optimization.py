from pydantic import BaseModel


class OptimizationResult(BaseModel):
    meeting_id: int
    room_id: int
    room_name: str
    score: int