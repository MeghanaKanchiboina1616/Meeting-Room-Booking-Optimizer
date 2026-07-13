from pydantic import BaseModel, ConfigDict


class RoomBase(BaseModel):
    name: str
    capacity: int
    building: str
    equipment: dict


class RoomCreate(RoomBase):
    pass


class RoomResponse(RoomBase):
    id: int
    is_active: bool

    model_config = ConfigDict(
        from_attributes=True
    )