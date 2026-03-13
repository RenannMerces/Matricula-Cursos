# Sistema de Matrícula em Cursos Online

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como parte de uma atividade acadêmica com o objetivo de construir um **protótipo funcional de uma plataforma de matrícula em cursos online**.

A aplicação integra um **frontend moderno** com uma **API backend**, simulando o fluxo completo de matrícula de alunos em cursos disponíveis.

O sistema permite que o usuário:

* Visualize cursos disponíveis
* Preencha um formulário de matrícula
* Envie seus dados para uma API
* Receba feedback de sucesso ou erro

O backend utiliza um **banco de dados simulado**, permitindo demonstrar o fluxo de requisições sem a necessidade de um banco de dados real.

---

# 🧩 Tecnologias Utilizadas

### Frontend

* Vue.js
* HTML
* CSS
* JS

### Backend

* Node.js
* Express
* TypeScript
* CORS

---

# 🏗 Arquitetura do Projeto

O projeto foi dividido em duas partes principais:

```
matricula-cursos
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ ├── FormularioMatricula.vue
│ │ │ ├── TabelaMatriculas.vue
│ │ │ └── FormularioMensagem.vue
│ │ │
│ │ ├── App.vue
│ │ └── main.js
│
├── backend
│ ├── src
│ │ ├── database
│ │ │ ├── cursos.json
│ │ │ └── matriculas.json
│ │ │
│ │ ├── models
│ │ │ └── Matricula.ts
│ │ │
│ │ ├── routes
│ │ │ ├── cursos.ts
│ │ │ └── matricula.ts
│ │ │
│ │ └── server.ts
│
└── package.json
```

---

# ⚙️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```
git clone <url-do-repositorio>
```

Entre na pasta do projeto:

```
cd matricula-cursos
```

---

# 🚀 Rodando o Backend

Entre na pasta:

```
cd backend
```

Instale as dependências:

```
npm install
```

Execute o servidor:

```
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

# 🎨 Rodando o Frontend

Abra outro terminal e vá para:

```
cd frontend
```

Instale as dependências:

```
npm install
```

Execute o projeto:

```
npm run serve
```

O frontend será iniciado em:

```
http://localhost:8080/ 
```

---

# 🔗 Rotas da API

## Listar Cursos

```
GET /cursos
```

Retorna a lista de cursos disponíveis.

### Exemplo de resposta

```
[
  { "id": 1, "nome": "Desenvolvimento Web" },
  { "id": 2, "nome": "UX Design" },
  { "id": 3, "nome": "Banco de Dados" }
]
```

---

## Realizar Matrícula

```
POST /matricula
```

### Corpo da requisição

```
{
  "nome": "Nome do aluno",
  "email": "email@email.com",
  "cursoId": 1
}
```

### Respostas possíveis

**201 Created**

Matrícula realizada com sucesso.

**400 Bad Request**

Dados inválidos enviados na requisição.

---

# 🗄 Banco de Dados Simulado

Para fins acadêmicos, foi utilizado um **banco de dados simulado em memória**, implementado através de arrays no arquivo:

```
backend/src/database/fakeDB.ts
```

Isso permite armazenar temporariamente:

* lista de cursos
* matrículas realizadas

Sem a necessidade de um banco de dados real.

---

# 🎯 Objetivos do Projeto

* Integrar frontend e backend
* Criar uma API REST com boas práticas
* Implementar validação de dados com TypeScript
* Aplicar conceitos de UX no formulário
* Simular persistência de dados

---

# 👨‍💻 Autor

Projeto desenvolvido por **Renan Mercês** como atividade acadêmica.

---
