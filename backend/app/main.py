from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import engine, Base
import app.models  # Importa todos os modelos para registro de tabela no SQLAlchemy
from app.api.v1.router import api_router

# Criar tabelas no banco se nao existirem
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Configuração de CORS para permitir requisições do Frontend/Totem/PWA
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
def root():
    return {
        "message": "Bem-vindo à API do Tourly - Plataforma Inteligente de Turismo",
        "docs": "/docs",
        "status": "online"
    }
