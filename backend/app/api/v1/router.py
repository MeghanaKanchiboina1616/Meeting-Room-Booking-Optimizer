from fastapi import APIRouter

from backend.app.api.v1.endpoints import (
    constraint_rules,
)

from backend.app.api.v1.endpoints.rooms import (
    router as rooms_router
)

from backend.app.api.v1.endpoints.meetings import (
    router as meetings_router
)
from backend.app.api.v1.endpoints.optimize import (
    router as optimize_router
)

api_router = APIRouter()

api_router.include_router(
    constraint_rules.router
)

api_router.include_router(
    rooms_router
)

api_router.include_router(
    meetings_router
)

api_router.include_router(
    optimize_router
)
