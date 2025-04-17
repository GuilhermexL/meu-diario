# 📝 Projeto Diário - DAW3

<p align="center">
  <img src="./images/ifpb-esp.png" alt="IFPB">
</p>

Este repositório contém o desenvolvimento de um sistema de Diário Digital, criado como parte da disciplina **DAW3 - Desenvolvimento de Aplicações Web III**. O projeto simula um blog pessoal, onde usuários podem registrar suas atividades diárias com imagens e descrições.

## 📚 Tecnologias Utilizadas

### 💻 Frontend

- [ReactJS](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- HTML5, CSS3 e JavaScript
- Template baseado no [Massively](https://html5up.net/massively)

### 🌐 Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

### ☁️ Hospedagem

- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Render](https://render.com/)
- **Banco de Dados:** [ElephantSQL](https://www.elephantsql.com/)

## 🛠️ Funcionalidades

O Diário é um sistema de registro de atividades do dia a dia, semelhante a um blog. As postagens cadastradas pelo usuário contêm os seguintes elementos:

- **DATA-HORA:** Gerado automaticamente pelo sistema no momento da criação da postagem.
- **TÍTULO:** Texto curto e objetivo que resume a entrada (com limitação de caracteres).
- **FOTO:** Imagem representativa da postagem. O upload é obrigatório.
- **TEXTO:** Descrição completa da atividade realizada naquele dia.

### 📄 Página Inicial

Na página principal do sistema são exibidas todas as postagens já cadastradas, cada uma contendo:

- Data e hora da postagem
- Título
- Imagem
- Resumo do texto (apenas os primeiros caracteres do conteúdo principal)

### ➕ Cadastro de Nova Entrada

Na mesma página, no rodapé, há um formulário completo para criar uma nova entrada, com os seguintes campos:

- Título
- Imagem (upload)
- Texto

### 🔍 Página de Detalhes

Ao clicar em uma postagem, o usuário é redirecionado para uma página exclusiva contendo todas as informações completas da entrada selecionada, incluindo o texto completo da descrição.


## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js instalado
- Conta no ElephantSQL ou banco PostgreSQL local
- Conta na Vercel e Render (opcional para deploy)

### 1. Clonar o repositório

```bash
git clone https://github.com/GuilhermexL/meu-diario.git
cd meu-diario
```

### 2. Instalar as dependências

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` com os seguintes dados:

```
DATABASE_URL="postgresql://<usuario>:<senha>@<host>:<porta>/<banco>?schema=public"
PORT=3001
```

### 4. Rodar as aplicações

```bash
# Backend
cd backend
npx prisma generate
npx prisma migrate dev
npm run dev

# Frontend
cd ../frontend
npm start
```

## 🚀 Deploy

- O **frontend** é hospedado na [Vercel](https://vercel.com/).
- O **backend** está publicado na [Render](https://render.com/).
- O **banco de dados** é mantido pela [ElephantSQL](https://www.elephantsql.com/).

## 👨‍💻 Autor

- [Guilherme Santos](https://www.linkedin.com/in/guilhermee-santos/)
- Análise e Desenvolvimento de Sistemas - [IFPB - Campus Esperança]