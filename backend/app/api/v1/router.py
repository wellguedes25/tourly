from fastapi import APIRouter
from app.api.v1.endpoints import health, companies, categories, events, promotions, ai_chat

api_router = APIRouter()

api_router.include_router(health.router, tags=["Health"])
api_router.include_router(companies.router, prefix="/companies", tags=["Companies"])
api_router.include_router(categories.router, prefix="/categories", tags=["Categories"])
api_router.include_router(events.router, prefix="/events", tags=["Events"])
api_router.include_router(promotions.router, prefix="/promotions", tags=["Promotions"])
api_router.include_router(ai_chat.router, prefix="/ai", tags=["AI Assistant"])
