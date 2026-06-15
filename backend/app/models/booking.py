from datetime import datetime

from sqlalchemy import Integer
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from backend.app.core.database import Base


class Booking(Base):
    __tablename__ = "bookings"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    meeting_id: Mapped[int] = mapped_column(
        ForeignKey("meetings.id")
    )

    room_id: Mapped[int] = mapped_column(
        ForeignKey("rooms.id")
    )

    start_time: Mapped[datetime] = mapped_column(
        DateTime
    )

    end_time: Mapped[datetime] = mapped_column(
        DateTime
    )

    score: Mapped[int] = mapped_column(
        Integer,
        default=0
    )

    meeting = relationship(
        "Meeting",
        back_populates="bookings"
    )

    room = relationship(
        "Room",
        back_populates="bookings"
    )