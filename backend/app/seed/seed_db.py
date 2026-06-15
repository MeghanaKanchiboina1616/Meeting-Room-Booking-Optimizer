from sqlalchemy.orm import Session

from backend.app.core.database import SessionLocal
from backend.app.models.room import Room


ROOMS = [
    {
        "name": "A101",
        "capacity": 10,
        "building": "Block A",
        "equipment": {
            "projector": True,
            "whiteboard": True,
            "video": False
        }
    },
    {
        "name": "B201",
        "capacity": 20,
        "building": "Block B",
        "equipment": {
            "projector": True,
            "whiteboard": True,
            "video": True
        }
    },
    {
        "name": "C301",
        "capacity": 6,
        "building": "Block C",
        "equipment": {
            "projector": False,
            "whiteboard": True,
            "video": False
        }
    }
]


def seed_rooms(db: Session):

    existing = db.query(Room).count()

    if existing > 0:
        print("Rooms already seeded")
        return

    rooms = [
        Room(**room)
        for room in ROOMS
    ]

    db.add_all(rooms)

    db.commit()

    print("Rooms seeded successfully")


if __name__ == "__main__":

    db = SessionLocal()

    seed_rooms(db)

    db.close()