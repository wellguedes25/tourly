import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Tourly API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://tourly_user:tourly_pass@localhost:5432/tourly_db")
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "super_secret_tourly_key_change_in_production")
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")

    class Config:
        case_sensitive = True

settings = Settings()
