from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import JSON

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from backend.app.core.database import Base


class Room(Base):
    __tablename__ = "rooms"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    name: Mapped[str] = mapped_column(
        String,
        unique=True
    )

    capacity: Mapped[int] = mapped_column(
        Integer
    )

    building: Mapped[str] = mapped_column(
        String
    )

    equipment: Mapped[dict] = mapped_column(
        JSON
    )

    bookings = relationship(
        "Booking",
        back_populates="room"
    )