import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Boolean, Text
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
from app.core.database import Base

class Promotion(Base):
    __tablename__ = "promotions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    company_id = Column(UUID(as_uuid=True), ForeignKey("companies.id"), nullable=False, index=True)
    title = Column(String, nullable=False)
    discount_code = Column(String, nullable=True)
    discount_description = Column(Text, nullable=True)
    valid_until = Column(DateTime, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
