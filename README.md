# Spotify Full Stack Clone

Este repositório é uma cópia full stack do Spotify, desenvolvido para fins educacionais e prática de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

### Front-end:
- React.js
- Vite
- React Router DOM
- Axios

### Back-end:
- Node.js
- Express
- PostgreSQL
- Prisma ORM

## 📌 Funcionalidades
- Principais artistas
- Principais músicas
- Músicas populares
- Reprodução de músicas

## 🛠 Como Executar o Projeto

### 1. Clone o repositório
```bash
 git clone https://github.com/Alberto-Oliveira00/spotify-fullstack.git
 cd spotify-fullstack
```

### 2. Configurar o Back-end
```bash
 cd server
 npm install  # ou yarn install
```
- Crie um arquivo `.env` na pasta `server` com as credenciais da API do Spotify e configuração do banco de dados.
```env
SPOTIFY_CLIENT_ID=seu_client_id\SPOTIFY_CLIENT_SECRET=seu_client_secret
DATABASE_URL=postgres://usuario:senha@localhost:5432/spotify_clone
```
- Execute o servidor:
```bash
 npm run dev  # ou yarn dev
```

### 3. Configurar o Front-end
```bash
 cd client
 npm install  # ou yarn install
 npm run dev  # ou yarn dev
```

## 📄 Licença
Este projeto foi criado apenas para fins educacionais e **não** deve ser utilizado comercialmente.

---

Desenvolvido por **Alberto Oliveira** 🚀

