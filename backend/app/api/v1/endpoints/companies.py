from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db
from app.models.company import Company
from pydantic import BaseModel
import uuid

router = APIRouter()

class CompanyResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    address: Optional[str] = None
    whatsapp_number: Optional[str] = None
    plan_type: str
    is_verified: bool
    image_url: Optional[str] = None

    class Config:
        from_attributes = True

@router.get("", response_model=List[CompanyResponse])
def list_companies(
    category_id: Optional[str] = None,
    plan_type: Optional[str] = None,
    search: Optional[str] = None,
    db: Session = Depends(get_db)
):
    # Retorna lista de empresas cadastradas (mock/db)
    query = db.query(Company).filter(Company.is_active == True)
    if plan_type:
        query = query.filter(Company.plan_type == plan_type)
    
    companies = query.all()
    
    # Se ainda nao houver empresas no banco, envia dados iniciais para o MVP (Porto de Galinhas)
    if not companies:
        return [
            CompanyResponse(
                id=str(uuid.uuid4()),
                name="Pizzaria da Hora",
                description="A melhor pizza artesanal de Porto de Galinhas.",
                address="Rua das Piscinas Naturais, 45",
                whatsapp_number="5581999990001",
                plan_type="HIGHLIGHT",
                is_verified=True,
                image_url="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
            ),
            CompanyResponse(
                id=str(uuid.uuid4()),
                name="Submerso Scuba Diver",
                description="Mergulho guiado e batismo nas piscinas naturais com instrutores credenciados.",
                address="Vila dos Pescadores, Bloco B",
                whatsapp_number="5581999990002",
                plan_type="PRO",
                is_verified=True,
                image_url="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
            ),
            CompanyResponse(
                id=str(uuid.uuid4()),
                name="Temakeria do Porto",
                description="Culinária japonesa rápida, temakis frescos e combinados especiais.",
                address="Av. Beira Mar, 102",
                whatsapp_number="5581999990003",
                plan_type="BASIC",
                is_verified=False,
                image_url="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
            ),
            CompanyResponse(
                id=str(uuid.uuid4()),
                name="Pub & Café Beer Rock",
                description="Música ao vivo, cervejas artesanais e ambiente descontraído à noite.",
                address="Rua da Moeda, 18",
                whatsapp_number="5581999990004",
                plan_type="PRO",
                is_verified=True,
                image_url="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80"
            )
        ]
    return companies
