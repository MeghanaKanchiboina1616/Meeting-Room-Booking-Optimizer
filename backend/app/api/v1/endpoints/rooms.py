from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from backend.app.core.database import get_db
from backend.app.models.room import Room
from backend.app.schemas.room import (
    RoomCreate,
    RoomResponse
)
import os
import tempfile

from fastapi import UploadFile
from fastapi import File

from backend.app.services.room_upload import (
    process_room_upload,
)

router = APIRouter(
    prefix="/rooms",
    tags=["Rooms"]
)
@router.get(
    "",
    response_model=list[RoomResponse]
)
def get_rooms(
    db: Session = Depends(get_db)
):

    rooms = db.query(Room).all()

    return rooms

@router.get(
    "/{room_id}",
    response_model=RoomResponse
)
def get_room(
    room_id: int,
    db: Session = Depends(get_db)
):

    room = (
        db.query(Room)
        .filter(Room.id == room_id)
        .first()
    )

    if not room:
        raise HTTPException(
            status_code=404,
            detail="Room not found"
        )

    return room

@router.post(
    "",
    response_model=RoomResponse,
    status_code=201
)
def create_room(
    payload: RoomCreate,
    db: Session = Depends(get_db)
):

    existing = (
        db.query(Room)
        .filter(Room.name == payload.name)
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Room already exists"
        )

    room = Room(
        **payload.model_dump()
    )

    db.add(room)

    db.commit()

    db.refresh(room)

    return room

@router.delete(
    "/{room_id}"
)
def delete_room(
    room_id: int,
    db: Session = Depends(get_db)
):

    room = (
        db.query(Room)
        .filter(Room.id == room_id)
        .first()
    )

    if not room:
        raise HTTPException(
            status_code=404,
            detail="Room not found"
        )

    db.delete(room)

    db.commit()

    return {
        "message": "Room deleted"
    }

@router.post("/upload")
def upload_rooms(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    if not file.filename.endswith(
        (".xlsx", ".xls")
    ):
        raise HTTPException(
            status_code=400,
            detail="Excel file required",
        )

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".xlsx",
    ) as temp:

        contents = file.file.read()

        temp.write(contents)

        temp_path = temp.name

    try:

        result = process_room_upload(
            temp_path,
            db,
        )

        return result

    finally:

        os.remove(temp_path)