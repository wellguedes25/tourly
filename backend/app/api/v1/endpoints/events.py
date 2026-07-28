from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

router = APIRouter()

class EventResponse(BaseModel):
    id: str
    title: str
    description: str
    start_time: str
    location_name: str
    image_url: Optional[str] = None

@router.get("", response_model=List[EventResponse])
def list_events():
    return [
        EventResponse(
            id="evt-1",
            title="Festival Gastronômico de Porto de Galinhas",
            description="Degustação dos pratos mais emblemáticos dos restaurantes locais com música ao vivo.",
            start_time="Hoje às 19:00",
            location_name="Vila dos Pescadores",
            image_url="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
        ),
        EventResponse(
            id="evt-2",
            title="Show de Verão na Praia",
            description="Apresentação cultural e artística gratuita promovida pela Secretaria de Turismo.",
            start_time="Amanhã às 17:30",
            location_name="Praia Central",
            image_url="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80"
        )
    ]
