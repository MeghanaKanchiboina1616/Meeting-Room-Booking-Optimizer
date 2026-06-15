from fastapi import FastAPI

from backend.app.core.config import settings
from backend.app.api.v1.router import api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title=settings.APP_NAME
)


@app.get("/")
def health_check():
    return {
        "message": "Meeting Room Optimizer API",
        "status": "healthy"
    }


app.include_router(
    api_router,
    prefix="/api/v1"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)