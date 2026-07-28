# PRD-01: Gestão de Tenants (Municípios)

> **Módulo:** MOD-01  
> **Fase:** MVP  
> **Status:** Aprovado

---

## 🎯 Objetivos do Módulo
Permitir o isolamento lógico completo dos dados de cada município/destino turístico cadastrado na plataforma Tourly, garantindo segurança, personalização de marca e autonomia de gestão.

---

## 👥 Personas Impactadas
- Gestores Públicos de Turismo (Prefeituras/Secretarias)
- Administradores Globais da Plataforma

---

## 📋 Requisitos Funcionais

1. **Cadastro de Municípios**:
   - Criação de novos tenants com: Nome, UF, Subdomínio exclusivo (`ex: porto.tourly.com.br`), Brasão/Logo e Cores Institucionais.
2. **Isolamento de Dados**:
   - Injeção obrigatória do `tenant_id` em todas as entidades do banco (empresas, categorias, eventos, promoções).
3. **Personalização Visual**:
   - Aplicação dinâmica de temas visuais no portal e totem conforme o subdomínio ou header da requisição.
4. **Gestão de Usuários Administrativos do Tenant**:
   - Convite e gestão de servidores públicos com níveis de acesso (Admin do Município, Editor de Eventos).

---

## 🔐 Requisitos Não-Funcionais
- **Segurança**: Isolamento rigoroso via middleware no backend. Nenhum tenant pode acessar dados de outro município.
- **Performance**: Resolução do tenant via cache Redis em < 5ms.
