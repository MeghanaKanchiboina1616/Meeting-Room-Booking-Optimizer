from pydantic import BaseModel, ConfigDict


class MeetingBase(BaseModel):
    title: str
    organizer: str
    participants: int
    duration: int
    preferences: dict


class MeetingCreate(MeetingBase):
    pass


class MeetingResponse(MeetingBase):
    id: int

    model_config = ConfigDict(
        from_attributes=True
    )