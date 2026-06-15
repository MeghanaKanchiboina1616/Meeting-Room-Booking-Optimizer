from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session
from backend.app.core.database import get_db

from backend.app.schemas.meeting import (
    MeetingCreate,
    MeetingResponse
)

from backend.app.services.meeting_service import (
    get_all_meetings,
    get_meeting_by_id,
    create_meeting,
    delete_meeting
)

router = APIRouter(
    prefix="/meetings",
    tags=["Meetings"]
)

@router.get(
    "",
    response_model=list[MeetingResponse]
)
def get_meetings(
    db: Session = Depends(get_db)
):

    return get_all_meetings(db)

@router.get(
    "/{meeting_id}",
    response_model=MeetingResponse
)
def get_meeting(
    meeting_id: int,
    db: Session = Depends(get_db)
):

    meeting = get_meeting_by_id(
        db,
        meeting_id
    )

    if not meeting:
        raise HTTPException(
            status_code=404,
            detail="Meeting not found"
        )

    return meeting

@router.post(
    "",
    response_model=MeetingResponse,
    status_code=201
)
def create_new_meeting(
    payload: MeetingCreate,
    db: Session = Depends(get_db)
):

    return create_meeting(
        db,
        payload.model_dump()
    )

@router.delete(
    "/{meeting_id}"
)
def remove_meeting(
    meeting_id: int,
    db: Session = Depends(get_db)
):

    meeting = get_meeting_by_id(
        db,
        meeting_id
    )

    if not meeting:
        raise HTTPException(
            status_code=404,
            detail="Meeting not found"
        )

    delete_meeting(
        db,
        meeting
    )

    return {
        "message": "Meeting deleted"
    }

