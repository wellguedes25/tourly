# Convenções de Nomenclatura - Tourly

> Padronização de nomes e estruturas para garantir consistência em todo o repositório do **Tourly**.

---

## 🗄️ 1. Banco de Dados (PostgreSQL)

| Elemento | Convenção | Exemplo |
| :--- | :--- | :--- |
| **Nomes de Tabelas** | `snake_case`, plural | `companies`, `events`, `tourist_spots` |
| **Colunas / Campos** | `snake_case`, singular | `title`, `created_at`, `is_active` |
| **Chave Primária** | `id` (UUIDv4) | `id` |
| **Chave Estrangeira** | `<tabela_singular>_id` | `company_id`, `category_id`, `tenant_id` |
| **Tabelas Pivot / Junção** | `<tabela1>_<tabela2>` (ordem alfabética) | `company_tag`, `event_location` |
| **Índices** | `idx_<tabela>_<coluna>` | `idx_companies_tenant_id` |

---

## 🐍 2. Backend (Python / FastAPI)

| Elemento | Convenção | Exemplo |
| :--- | :--- | :--- |
| **Classes (Domain, Schemas, ORM)** | `PascalCase` | `CompanyService`, `CreateEventRequest`, `CompanyModel` |
| **Métodos e Funções** | `snake_case` | `get_active_companies()`, `calculate_distance()` |
| **Variáveis e Atributos** | `snake_case` | `tenant_id`, `is_verified` |
| **Constantes** | `UPPER_CASE` com sublinhado | `MAX_SEARCH_RESULTS`, `DEFAULT_PAGE_SIZE` |
| **Módulos e Arquivos `.py`** | `snake_case` | `company_service.py`, `auth_middleware.py` |
| **Diretórios / Pacotes** | `snake_case` | `app/api/v1/endpoints/` |

---

## 🌐 3. API RESTful

| Elemento | Convenção | Exemplo |
| :--- | :--- | :--- |
| **URLs / Endpoints** | Minusculativo, hífen para separação, substantivos no plural | `/api/v1/companies`, `/api/v1/tourist-spots` |
| **Versionamento** | Prefixo `/api/v<numero>/` | `/api/v1/...` |
| **Query Parameters** | `snake_case` | `/api/v1/companies?category_id=123&is_open=true` |
| **Sub-recursos** | `/recurso-pai/{id}/sub-recurso` | `/api/v1/companies/{id}/promotions` |
| **JSON Payload (Request/Response)** | `camelCase` | `{"companyName": "Pizzaria da Hora", "createdAt": "..."}` |

---

## ⚛️ 4. Frontend & Mobile (React / Next.js / PWA)

| Elemento | Convenção | Exemplo |
| :--- | :--- | :--- |
| **Componentes React** | `PascalCase` | `CompanyCard.tsx`, `NavigationHeader.tsx` |
| **Hooks Customizados** | `use` + `PascalCase` | `useCompanies.ts`, `useGeolocation.ts` |
| **Arquivos de Páginas / Rotas** | `kebab-case` ou estrutura Next.js App Router | `app/tourist-spots/page.tsx` |
| **Estilos / Variáveis CSS** | `kebab-case` ou Utility Classes | `--primary-color`, `btn-primary` |
| **Funções Auxiliares / Utils** | `camelCase` | `formatCurrency()`, `parseCoordinates()` |

---

## 📂 5. Repositório e Controle de Versão (Git)

| Elemento | Convenção | Exemplo |
| :--- | :--- | :--- |
| **Branches** | `<tipo>/<descricao-curta>` | `feat/company-registry`, `fix/qr-code-redirect` |
| **Commits** | Conventional Commits em inglês ou português | `feat: adiciona endpoint de busca de promoções` |
