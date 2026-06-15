import pandas as pd

from sqlalchemy.orm import Session

from backend.app.models.room import Room

from backend.app.utils.validators import (
    validate_room_columns,
)
def process_room_upload(
    file_path: str,
    db: Session,
):

    df = pd.read_excel(
        file_path,
        engine="openpyxl"
    )

    validate_room_columns(df.columns)

    rooms = []

    for _, row in df.iterrows():

        exists = (
            db.query(Room)
            .filter(Room.name == row["name"])
            .first()
        )

        if exists:
            continue

        rooms.append(
            Room(
                name=row["name"],
                capacity=int(row["capacity"]),
                building=row["building"],
                equipment={
                    "projector": bool(
                        row["projector"]
                    ),
                    "whiteboard": bool(
                        row["whiteboard"]
                    ),
                    "video": bool(
                        row["video"]
                    ),
                },
            )
        )

    db.add_all(rooms)

    db.commit()

    return {
        "rooms_added": len(rooms)
    }