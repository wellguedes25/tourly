from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class PromotionResponse(BaseModel):
    id: str
    company_name: str
    title: str
    discount_code: str
    discount_description: str

@router.get("", response_model=List[PromotionResponse])
def list_promotions():
    return [
        PromotionResponse(
            id="promo-1",
            company_name="Pizzaria da Hora",
            title="15% de Desconto na Pizza Grande",
            discount_code="TOURLY15",
            discount_description="Apresente o QR Code do Totem para obter 15% de desconto no salão."
        ),
        PromotionResponse(
            id="promo-2",
            company_name="Pub & Café Beer Rock",
            title="Double Chopp no Happy Hour",
            discount_code="BEER2X",
            discount_description="Compre 1 Chopp e ganhe outro das 17h às 19h."
        )
    ]
