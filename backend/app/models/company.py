import uuid
from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey, Numeric, Text
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
from app.core.database import Base

class Company(Base):
    __tablename__ = "companies"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"), nullable=False, index=True)
    category_id = Column(UUID(as_uuid=True), ForeignKey("categories.id"), nullable=True, index=True)
    
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    address = Column(String, nullable=True)
    latitude = Column(Numeric(10, 8), nullable=True)
    longitude = Column(Numeric(11, 8), nullable=True)
    whatsapp_number = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    plan_type = Column(String, default="BASIC") # BASIC, PRO, HIGHLIGHT
    is_verified = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    image_url = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
