# 📚 API Biblioteca

> Uma API RESTful desenvolvida em **Node.js + TypeScript + Express + Prisma**, com o objetivo de gerenciar livros de uma biblioteca.  
> O projeto implementa boas práticas de arquitetura, separando responsabilidades entre rotas, controladores, serviços e camada de acesso ao banco.

---

## 🧭 Sumário

- [📌 Status](#-status)
- [✨ Funcionalidades](#-funcionalidades)
- [🧱 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [⚙️ Pré-requisitos](#️-pré-requisitos)
- [📁 Estrutura do projeto](#-estrutura-do-projeto)
- [🔹Autores](#-autores)

---

## 📌 Status

✅ **Projeto funcional e em desenvolvimento contínuo.**  
Possui operações CRUD completas para o gerenciamento de livros e integração com o Prisma ORM.

---

## ✨ Funcionalidades

- 📖 Cadastrar, listar, buscar, atualizar e excluir livros  
- 🧩 Arquitetura organizada em camadas (Routes → Controllers → Services → Prisma)  
- 🔧 Tipagem estática com TypeScript  
- 🗄 Integração com banco PostgreSQL via Prisma  
- 🐳 Execução via Docker / Docker Compose  
- ⚡️ Pronto para deploy em qualquer ambiente Node.js

---

## 🧱 Tecnologias utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Node.js** | Ambiente de execução JavaScript |
| **TypeScript** | Superset do JS com tipagem estática |
| **Express** | Framework minimalista para APIs HTTP |
| **Prisma ORM** | ORM moderno para banco relacional |
| **PostgreSQL** | Banco de dados relacional |
| **Docker & Compose** | Containerização e orquestração |
| **TS-Node / Nodemon** | Execução em ambiente de desenvolvimento |

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/en/) (v18 ou superior)  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)  
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)  
- Banco **PostgreSQL** (local ou via container)

---

## 📁 Estrutura do projeto
```
api-biblioteca/
├── prisma/
│   ├── schema.prisma        # Definição do modelo do banco
│   └── migrations/          # Migrações geradas pelo Prisma
│
├── src/
│   ├── controllers/         # Controladores responsáveis pelas requisições
│   │   └── livros.controller.ts
│   ├── services/            # Regras de negócio e comunicação com o banco
│   │   └── livros.service.ts
│   ├── routes/              # Definição das rotas da aplicação
│   │   └── livros.routes.ts
│   ├── prisma/              # Configuração e exportação do cliente Prisma
│   │   └── client.ts
│   └── index.ts             # Ponto de entrada da aplicação
│
├── docker-compose.yml       # Configuração dos containers (API + DB)
├── Dockerfile.docker        # Configuração de build do container
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configuração TypeScript
└── .env                     # Variáveis de ambiente (ignorado pelo git)
```
---

### 🔹Autores
- Rodrigo Campos Gouveia
- Thulio Leal e Silva
---
