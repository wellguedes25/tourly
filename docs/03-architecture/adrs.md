# Registros de Decisão de Arquitetura (ADRs) - Tourly

---

## ADR-001: Escolha do Framework Backend - FastAPI (Python)

### Contexto
Necessitamos de um framework backend moderno, altamente performático, com suporte nativo a chamadas assíncronas (`async/await`), validação automática de schemas de dados e fácil integração com bibliotecas de Inteligência Artificial / LLMs em Python.

### Decisão
Escolhemos o **FastAPI** rodando em Python 3.11+.

### Consequências
- **Positivas**: Altíssima velocidade de desenvolvimento, documentação OpenAPI (Swagger) gerada automaticamente, ecossistema Python nativo para IA/RAG (LangChain/LlamaIndex).
- **Negativas**: Exige disciplina de digitação de tipos estáticos (`pydantic`) para evitar erros em tempo de execução.

---

## ADR-002: Escolha do Banco de Dados - PostgreSQL + PGVector

### Contexto
O Tourly gerencia dados estruturados relacionais (empresas, categorias, transações, usuários) e também necessitará de busca vetorial para o módulo de recomendações com IA.

### Decisão
Utilizaremos **PostgreSQL 16** com extensão `pgvector`.

### Consequências
- **Positivas**: Mantém toda a infraestrutura em um único motor de banco altamente confiável, eliminando a necessidade de gerenciar um banco de vetores separado no MVP.

---

## ADR-003: Framework Frontend - Next.js (React) + PWA

### Contexto
O portal precisa de SSR/SSG para excelente indexação no Google (SEO), carregamento instantâneo para turistas com conexões móveis e suporte para funcionamento offline / PWA nos totens.

### Decisão
Utilizaremos **Next.js (App Router)** com TypeScript e suporte a PWA.

### Consequências
- **Positivas**: Excelente desempenho de renderização, suporte fácil a PWA e renderização híbrida server/client.
