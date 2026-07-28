# Especificação de APIs - Tourly

> **Padrão:** REST / JSON  
> **Autenticação:** JWT (Bearer Token)  
> **Headers Obrigatórios:** `X-Tenant-ID: <uuid>`

---

## 🛣️ Resumo dos Endpoints REST

### 1. Estabelecimentos (`/api/v1/companies`)

- `GET /api/v1/companies`: Lista empresas do município com filtros.
  - Query Params: `category_id`, `plan_type`, `search`, `page`, `limit`
- `GET /api/v1/companies/{id}`: Detalhes de uma empresa específica.
- `POST /api/v1/companies`: Cadastra nova empresa (Requer Auth Admin/Lojista).
- `PUT /api/v1/companies/{id}`: Atualiza dados da empresa.

### 2. Categorias (`/api/v1/categories`)

- `GET /api/v1/categories`: Lista todas as categorias do município.

### 3. Promoções (`/api/v1/promotions`)

- `GET /api/v1/promotions`: Lista promoções ativas.
- `POST /api/v1/companies/{company_id}/promotions`: Cria nova promoção.

### 4. Eventos (`/api/v1/events`)

- `GET /api/v1/events`: Lista os próximos eventos da cidade.

### 5. Assistente de IA (`/api/v1/ai/chat`)

- `POST /api/v1/ai/chat`: Envia mensagem para o assistente virtual do município.
  - Request Payload:
    ```json
    {
      "message": "Quais são as melhores opções de mergulho em Porto de Galinhas com crianças?",
      "sessionId": "abc-123"
    }
    ```
  - Response Payload:
    ```json
    {
      "reply": "Para mergulho com crianças em Porto de Galinhas, a empresa 'Submerso Scuba Diver' oferece batismo supervisionado em piscinas naturais com águas calmas.",
      "recommendedCompanies": ["submerso-scuba-id"]
    }
    ```
