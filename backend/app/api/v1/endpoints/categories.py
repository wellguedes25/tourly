from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class CategoryResponse(BaseModel):
    id: str
    name: str
    slug: str
    icon_name: str

@router.get("", response_model=List[CategoryResponse])
def list_categories():
    return [
        CategoryResponse(id="cat-1", name="Restaurantes", slug="restaurantes", icon_name="utensils"),
        CategoryResponse(id="cat-2", name="Passeios & Mergulho", slug="passeios", icon_name="compass"),
        CategoryResponse(id="cat-3", name="Hospedagem", slug="hospedagem", icon_name="hotel"),
        CategoryResponse(id="cat-4", name="Locação de Veículos", slug="locacao", icon_name="car"),
        CategoryResponse(id="cat-5", name="Farmácias & Emergências", slug="emergencias", icon_name="first-aid"),
        CategoryResponse(id="cat-6", name="Eventos do Dia", slug="eventos", icon_name="calendar")
    ]
