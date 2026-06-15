from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from backend.app.core.database import get_db

from backend.app.services.optimizer import (
    optimize_schedule,
)

router = APIRouter(
    prefix="/optimize",
    tags=["Optimization"]
)

@router.post("")
def optimize(
    db: Session = Depends(get_db)
):

    return optimize_schedule(db)