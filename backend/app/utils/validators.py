REQUIRED_COLUMNS = {
    "name",
    "capacity",
    "building",
    "projector",
    "whiteboard",
    "video",
}


def validate_room_columns(columns):

    missing = REQUIRED_COLUMNS - set(columns)

    if missing:
        raise ValueError(
            f"Missing columns: {', '.join(missing)}"
        )