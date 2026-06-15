from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import JSON

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from backend.app.core.database import Base


class Meeting(Base):
    __tablename__ = "meetings"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    title: Mapped[str] = mapped_column(String)

    organizer: Mapped[str] = mapped_column(String)

    participants: Mapped[int] = mapped_column(Integer)

    duration: Mapped[int] = mapped_column(Integer)

    preferences: Mapped[dict] = mapped_column(JSON)

    bookings = relationship(
        "Booking",
        back_populates="meeting"
    )