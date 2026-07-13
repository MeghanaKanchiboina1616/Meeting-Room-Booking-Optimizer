from ortools.sat.python import cp_model
from sqlalchemy.orm import Session

from backend.app.models.room import Room
from backend.app.models.meeting import Meeting


def optimize_schedule(db: Session):
    meetings = (
    db.query(Meeting)
    .filter(Meeting.is_completed == False)
    .all()
    )
    rooms = (
    db.query(Room)
    .filter(Room.is_active == True)
    .all()
    )

    if not meetings or not rooms:
        return []

    model = cp_model.CpModel()

    # Decision Variables
    assignments = {}

    for meeting in meetings:
        for room in rooms:
            assignments[(meeting.id, room.id)] = model.NewBoolVar(
                f"m{meeting.id}_r{room.id}"
            )

    # Constraint 1: One Room Per Meeting
    for meeting in meetings:
        model.AddExactlyOne(
            assignments[(meeting.id, room.id)]
            for room in rooms
        )

    # Constraint 2: Room Used Once
    for room in rooms:
        model.Add(
            sum(
                assignments[(meeting.id, room.id)]
                for meeting in meetings
            ) <= 1
        )

    # Constraint 3: Capacity Constraint
    for meeting in meetings:
        for room in rooms:
            if room.capacity < meeting.participants:
                model.Add(
                    assignments[(meeting.id, room.id)] == 0
                )

    # Constraint 4: Equipment Constraint
    for meeting in meetings:
        required = meeting.preferences or {}

        for room in rooms:
            room_equipment = room.equipment or {}

            if required.get("projector", False):
                if not room_equipment.get("projector", False):
                    model.Add(
                        assignments[(meeting.id, room.id)] == 0
                    )

            if required.get("whiteboard", False):
                if not room_equipment.get("whiteboard", False):
                    model.Add(
                        assignments[(meeting.id, room.id)] == 0
                    )

            if required.get("video", False):
                if not room_equipment.get("video", False):
                    model.Add(
                        assignments[(meeting.id, room.id)] == 0
                    )

    # Objective Function
    objective_terms = []

    for meeting in meetings:
        preferred_building = (
            (meeting.preferences or {}).get(
                "preferred_building"
            )
        )

        for room in rooms:
            score = 0

            if (
                preferred_building
                and room.building == preferred_building
            ):
                score += 10

            # Bonus for tighter capacity fit
            unused_capacity = (
                room.capacity - meeting.participants
            )

            if unused_capacity >= 0:
                score += max(0, 5 - unused_capacity)

            objective_terms.append(
                score
                * assignments[(meeting.id, room.id)]
            )

    model.Maximize(sum(objective_terms))

    # Solve
    solver = cp_model.CpSolver()

    status = solver.Solve(model)

    results = []

    if status in (
        cp_model.OPTIMAL,
        cp_model.FEASIBLE,
    ):
        for meeting in meetings:
            for room in rooms:
                if solver.Value(
                    assignments[(meeting.id, room.id)]
                ):
                    results.append(
                        {
                            "meeting_id": meeting.id,
                            "meeting_title": meeting.title,
                            "participants": meeting.participants,
                            "room_id": room.id,
                            "room_name": room.name,
                            "building": room.building,
                            "capacity": room.capacity,
                            "objective_score": solver.ObjectiveValue(),
                        }
                    )

    return results