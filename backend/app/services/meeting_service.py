from sqlalchemy.orm import Session

from backend.app.models.meeting import Meeting


def get_all_meetings(db: Session):
    return db.query(Meeting).all()


def get_meeting_by_id(
    db: Session,
    meeting_id: int
):
    return (
        db.query(Meeting)
        .filter(Meeting.id == meeting_id)
        .first()
    )


def create_meeting(
    db: Session,
    payload: dict
):
    meeting = Meeting(**payload)

    db.add(meeting)

    db.commit()

    db.refresh(meeting)

    return meeting


def delete_meeting(
    db: Session,
    meeting: Meeting
):
    db.delete(meeting)

    db.commit()