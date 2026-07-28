from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from app.core.database import get_db
from app.models.tenant import Tenant

router = APIRouter()

class TenantResponse(BaseModel):
    id: str
    name: str
    slug: str
    primary_color: str
    secondary_color: str

    class Config:
        from_attributes = True

class TenantCreate(BaseModel):
    name: str
    slug: str
    primary_color: Optional[str] = "#0F172A"
    secondary_color: Optional[str] = "#0EA5E9"

@router.get("", response_model=List[TenantResponse])
def list_tenants(db: Session = Depends(get_db)):
    tenants = db.query(Tenant).filter(Tenant.is_active == True).all()
    if not tenants:
        return [
            TenantResponse(
                id="tenant-porto-id",
                name="Porto de Galinhas",
                slug="porto-de-galinhas",
                primary_color="#0F172A",
                secondary_color="#0EA5E9"
            )
        ]
    return tenants

@router.post("", response_model=TenantResponse)
def create_tenant(payload: TenantCreate, db: Session = Depends(get_db)):
    existing = db.query(Tenant).filter(Tenant.slug == payload.slug).first()
    if existing:
        raise HTTPException(status_code=400, detail="Já existe um município cadastrado com este slug.")
    
    tenant = Tenant(
        name=payload.name,
        slug=payload.slug,
        primary_color=payload.primary_color,
        secondary_color=payload.secondary_color
    )
    db.add(tenant)
    db.commit()
    db.refresh(tenant)
    return tenant
