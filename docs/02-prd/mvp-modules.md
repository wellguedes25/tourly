# PRD - Módulos Funcionais do MVP (Tourly)

> **Versão:** 1.0.0  
> **Status:** Especificação de Requisitos

---

## 🧩 Visão Geral dos Módulos do MVP

O MVP do **Tourly** é constituído por 10 módulos funcionais principais:

```
+-----------------------------------------------------------------------+
|                              TOURLY MVP                               |
+-------------------+-------------------+-------------------------------+
|  MOD-01: Tenants  | MOD-02: Empresas  | MOD-03: Categorias/Tags       |
|  MOD-04: Eventos  | MOD-05: Promoções | MOD-06: Avaliações/Reviews    |
|  MOD-07: Portal   | MOD-08: Totem/PWA | MOD-09: Assistente IA         |
|  MOD-10: Admin    |                   |                               |
+-------------------+-------------------+-------------------------------+
```

---

## 📄 Detalhamento dos Módulos

### MOD-01: Gestão de Tenants (Municípios)
- **Descrição**: Permite o isolamento lógico dos dados para cada município/cidade participante.
- **Requisitos**:
  - Cadastro do município com subdomínio (ex: `portodegalinhas.tourly.com.br`).
  - Configurações visuais personalizadas (Logo da prefeitura, cores primárias).
  - Gestão de secretários e administradores do município.

### MOD-02: Cadastro e Perfil de Empresas / Atrativos
- **Descrição**: Gerenciamento de estabelecimentos comerciais, atrativos naturais, restaurantes, hotéis e serviços.
- **Requisitos**:
  - Dados cadastrais: Nome, Descrição, Endereço, Geolocalização (Lat/Lng), Horário de Funcionamento, Telefone/WhatsApp.
  - Galeria de Fotos e Categorização.
  - Vínculo a um Plano de Assinatura (Básico, Profissional, Destaque).

### MOD-03: Categorias e Tags
- **Descrição**: Taxonomia flexível para facilitar a navegação do turista.
- **Requisitos**:
  - Categorias raiz: Gastronomia, Passeios, Mergulho, Hospedagem, Compras, Utilidade Pública (Farmácias, Postos de Saúde).
  - Subcategorias e tags filtáveis (ex: "Pet Friendly", "Com Acessibilidade", "Pizzaria").

### MOD-04: Gestão de Eventos
- **Descrição**: Publicação de eventos públicos ou privados da cidade.
- **Requisitos**:
  - Título, Descrição, Data/Hora de início e fim, Localização, Imagem de capa.
  - Filtro por eventos "Hoje", "Neste Fim de Semana" e "Em Breve".

### MOD-05: Promoções e Cupons
- **Descrição**: Ofertas exclusivas disponibilizadas pelos comerciantes parceiros.
- **Requisitos**:
  - Desconto percentual ou valor fixo.
  - Regras de resgate (Ex: "Apresente o QR Code do Totem para obter 10% de desconto").
  - Data de validade da promoção.

### MOD-06: Avaliações e Recomendações (Reviews)
- **Descrição**: Sistema de feedback dos visitantes.
- **Requisitos**:
  - Nota de 1 a 5 estrelas e comentário curto.
  - Moderação preventiva contra spams e ofensas.

### MOD-07: Portal Web do Turista
- **Descrição**: Interface web pública responsiva para acesso em smartphones ou desktops.
- **Requisitos**:
  - Home dinâmica com busca em tempo real, destaques do município e mapa interativo.
  - Botão flutuante "Falar via WhatsApp" para cada estabelecimento.

### MOD-08: Modo Totem / PWA Interativo
- **Descrição**: Layout especializado para telas touchscreen de totens físicos (hotéis/aeroportos).
- **Requisitos**:
  - Modo quiosque (Kiosk Mode) com proteção contra fechamento de tela.
  - QR Code para transferência de rota/contato direto para o celular do turista.

### MOD-09: Assistente Inteligente de Turismo (IA)
- **Descrição**: Chatbot especializado que responde dúvidas do turista usando RAG (Retrieval-Augmented Generation).
- **Requisitos**:
  - Consultas com base estritamente no banco do Tourly.
  - Exemplos: *"Onde posso comer massa artesanal com crianças em Porto de Galinhas?"*

### MOD-10: Painel Administrativo (Gestor & Lojista)
- **Descrição**: Central web de gerenciamento com níveis de permissão.
- **Requisitos**:
  - Lojista: Atualiza perfil, adiciona promoções, visualiza cliques no WhatsApp.
  - Prefeitura/Admin: Visualiza relatórios globais de acessos, aprova lojistas e gerencia eventos municipais.
