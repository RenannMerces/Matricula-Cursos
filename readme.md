# Sistema de Matrícula em Cursos Online

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como parte de uma atividade acadêmica com o objetivo de construir um **protótipo funcional de uma plataforma de matrícula em cursos online**.

A aplicação integra um **frontend moderno** com uma **API backend**, simulando o fluxo completo de matrícula de alunos em cursos disponíveis.

O sistema permite que o usuário:

* Visualize cursos disponíveis
* Preencha um formulário de matrícula
* Envie seus dados para uma API
* Receba feedback de sucesso ou erro
* Visualize uma tabela com todos os alunos matriculados e o curso correspondente
* Remova matrículas existentes diretamente pela interface

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
│ │ ├── assets
│ │ │
│ │ ├── components
│ │ │ ├── FormularioMatricula.vue
│ │ │ ├── FormularioMensagem.vue
│ │ │ ├── NavBar.vue
│ │ │ └── TabelaMatriculas.vue
│ │ │
│ │ ├── router
│ │ │ └── index.js
│ │ │
│ │ ├── views
│ │ │ ├── InscricaoAlunos.vue
│ │ │ └── MatriculaCursos.vue
│ │ │
│ │ ├── App.vue
│ │ └── main.js
│ │
│ └── package.json
│
├── backend
│ ├── src
│ │ ├── database
│ │ │ ├── cursos.json
│ │ │ └── matriculas.json
│ │ │
│ │ ├── models
│ │ │ ├── Curso.ts
│ │ │ └── Matricula.ts
│ │ │
│ │ ├── routes
│ │ │ ├── cursos.ts
│ │ │ └── matricula.ts
│ │ │
│ │ └── server.ts
│ │
│ ├── package.json
│ └── tsconfig.json
│
├── .gitignore
├── package.json
└── README.md
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

# 📂 Descrição das Pastas

## Frontend

O **frontend** foi desenvolvido utilizando **Vue.js**, sendo responsável pela interface da aplicação e interação com o usuário.

- **components** → Componentes reutilizáveis da interface.
- **router** → Configuração de rotas da aplicação.
- **views** → Páginas principais exibidas ao usuário.
- **App.vue** → Componente raiz da aplicação.
- **main.js** → Ponto de inicialização do Vue.

### Componentes principais

- **FormularioMatricula.vue** → Formulário para matrícula em cursos.
- **TabelaMatriculas.vue** → Exibe as matrículas realizadas.
- **FormularioMensagem.vue** → Exibe mensagens de sucesso ou erro.
- **NavBar.vue** → Barra de navegação da aplicação.

---

## Backend

O **backend** foi desenvolvido utilizando **Node.js com Express e TypeScript**, sendo responsável por fornecer a API e gerenciar os dados da aplicação.

### Estrutura

- **database** → Simulação de banco de dados utilizando arquivos JSON.
- **models** → Interfaces TypeScript para tipagem dos dados.
- **routes** → Definição das rotas da API.
- **server.ts** → Arquivo principal que inicializa o servidor Express.

### Arquivos de dados

- **cursos.json** → Lista de cursos disponíveis.
- **matriculas.json** → Registros de matrículas realizadas.

---

# 🔗 Comunicação entre Frontend e Backend

A aplicação funciona através de uma **API REST**:

- `GET /cursos` → Retorna os cursos disponíveis
- `GET /matriculas` → Retorna as matrículas cadastradas
- `POST /matricula` → Realiza uma nova matrícula

O **frontend consome essas rotas** para exibir os cursos e registrar novas matrículas.

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
