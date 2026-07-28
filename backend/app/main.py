from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import engine, Base, SessionLocal
import app.models  # Importa todos os modelos para registro de tabela no SQLAlchemy
from app.models.user import User
from app.core.security import get_password_hash
from app.api.v1.router import api_router

# Criar tabelas no banco se nao existirem
Base.metadata.create_all(bind=engine)

# Função de SEED automático de contas de teste com sincronização de senha
def seed_initial_users():
    db = SessionLocal()
    try:
        pref = db.query(User).filter(User.email == "prefeitura@tourly.com.br").first()
        if not pref:
            pref = User(
                email="prefeitura@tourly.com.br",
                password_hash=get_password_hash("admin123"),
                full_name="Secretaria de Turismo",
                role="ADMIN_TENANT"
            )
            db.add(pref)
        else:
            pref.password_hash = get_password_hash("admin123")

        loj = db.query(User).filter(User.email == "lojista@tourly.com.br").first()
        if not loj:
            loj = User(
                email="lojista@tourly.com.br",
                password_hash=get_password_hash("lojista123"),
                full_name="Pizzaria da Hora",
                role="LOJISTA"
            )
            db.add(loj)
        else:
            loj.password_hash = get_password_hash("lojista123")

        db.commit()
        print("Contas de teste sincronizadas com sucesso!")
    except Exception as e:
        print(f"Erro no seed de usuarios: {e}")
        db.rollback()
    finally:
        db.close()

seed_initial_users()

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
