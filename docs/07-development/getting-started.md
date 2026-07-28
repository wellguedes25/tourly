# Guia de Desenvolvimento - Tourly

---

## 💻 1. Pré-requisitos de Ambiente

- **Docker & Docker Compose** (versão 24.0+)
- **Python** (versão 3.11+)
- **Node.js** (versão 18.0+)
- **Git**

---

## 🚀 2. Subindo o Ambiente Local (Docker)

```bash
# 1. Clonar o repositório
git clone https://github.com/usuario/tourly.git
cd tourly

# 2. Configurar variáveis de ambiente (.env)
cp .env.example .env

# 3. Subir os contêineres de banco e aplicação
docker-compose up -d --build
```

Serviços disponíveis:
- Backend FastAPI: `http://localhost:8000/docs`
- Frontend Next.js / PWA: `http://localhost:3000`
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`
