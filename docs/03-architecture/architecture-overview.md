# Arquitetura do Sistema - Tourly

> **Padrão:** Monólito Modular / Clean Architecture / API-First / Multi-Tenant  
> **Versão:** 1.0.0

---

## 🏗️ 1. Diagrama de Arquitetura de Alto Nível

```mermaid
graph TD
    subgraph Clientes / Interfaces
        PWA[PWA / Mobile Web]
        Totem[Totem Touchscreen - Kiosk Mode]
        AdminWeb[Painel Admin Web - Next.js]
    end

    subgraph Infraestrutura & Proxy
        Nginx[Nginx Reverse Proxy / SSL]
    end

    subgraph Backend FastAPI
        API[FastAPI Router / Middleware]
        Auth[Auth & JWT Middleware]
        TenantMW[Tenant Isolator Middleware]
        
        subgraph Modulos Core
            CompanyMod[Módulo Empresas]
            EventMod[Módulo Eventos]
            PromoMod[Módulo Promoções]
            IAMod[Módulo IA & RAG]
        end
    end

    subgraph Camada de Dados & Serviços
        PostgreSQL[(PostgreSQL - Dados Relacionais)]
        Redis[(Redis - Cache & Sessões)]
        Ollama[Ollama / LLM Engine (Local/Hosted)]
    end

    PWA --> Nginx
    Totem --> Nginx
    AdminWeb --> Nginx

    Nginx --> API
    API --> Auth
    Auth --> TenantMW

    TenantMW --> CompanyMod
    TenantMW --> EventMod
    TenantMW --> PromoMod
    TenantMW --> IAMod

    CompanyMod --> PostgreSQL
    EventMod --> PostgreSQL
    PromoMod --> PostgreSQL
    
    CompanyMod --> Redis
    IAMod --> Ollama
    IAMod --> PostgreSQL
```

---

## 🔒 2. Estratégia Multi-Tenant

O **Tourly** utiliza isolamento por **coluna discriminadora (`tenant_id`)** no mesmo banco de dados com índices apropriados para garantir alta performance e baixo custo operacional no MVP:
- Cada requisição REST deve enviar o identificador do município no cabeçalho HTTP (`X-Tenant-ID`) ou ser resolvida via subdomínio (`porto.tourly.com.br`).
- O Middleware do FastAPI intercepta todas as consultas SQL e injeta automaticamente a cláusula `WHERE tenant_id = :current_tenant`.
