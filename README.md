# ProductAPI

Projeto de exemplo de uma **API REST para cadastro de produtos** usando **.NET 8** no backend e **React com Vite** no frontend. O front-end consome a API e exibe os produtos em uma tabela estilo Excel.

---

## Tecnologias utilizadas

- **Backend**:

  - .NET 8 (C#)
  - Entity Framework Core (InMemory)
  - Swagger para documentação da API
  - Princípios SOLID aplicados (Dependency Injection, Single Responsibility)

- **Frontend**:

  - React (Vite)
  - Fetch API para comunicação com o backend
  - CSS moderno com Flexbox e tabela responsiva

---

## Funcionalidades

### Backend

- **Endpoints da API**:

| Método | Endpoint | Descrição                 |
| ------ | -------- | ------------------------- |
| POST   | /produto | Cadastrar um novo produto |
| GET    | /produto | Listar todos os produtos  |

- **Produto** possui os campos:

  - `name`: string
  - `price`: decimal
  - `category`: string

- **Banco de dados**:
  - Inicialmente usa **InMemory** para testes rápidos.

- **Swagger**:
  - Disponível em `/swagger` para documentação e testes da API.

- **Padrões SOLID aplicados**:

  - **IProductService**: Interface para separação de responsabilidade e injeção de dependência.
  - **ProductService**: Implementação responsável apenas pelas regras de negócio.

---

### Frontend

- Formulário para cadastro de produtos, centralizado na tela e responsivo.
- Tabela estilo Excel exibindo todos os produtos cadastrados.
- Tratamento de erros e fetch seguro (evita `Unexpected end of JSON input`).
- Layout responsivo.

---

## Estrutura de pastas

```
ProductAPI/
├─ ProductAPI.Server/        # Backend (.NET 6)
│  ├─ Aplication/
│  │  ├─ Interfaces/IProductService.cs
│  │  └─ Services/ProductService.cs
│  ├─ Controllers/ProductController.cs
│  ├─ Infrastructure/Data/AppDbContext.cs
│  └─ DTOs/ProductCreateDTO.cs / ProductReadDTO.cs
├─ Frontend-react-product-app/  # Frontend (React)
│  ├─ src/
│  │  ├─ App.jsx
│  │  └─ App.css
│  └─ vite.config.js
└─ README.md
```

---

## Rodando o projeto

### Backend (.NET 8)

1. Abra o terminal na pasta `ProductAPI.Server`.
2. Execute o comando:

```bash
dotnet run
```

- A API será iniciada em `https://localhost:7274` (HTTPS) e `http://localhost:5053` (HTTP).
- Swagger estará disponível em `https://localhost:7274/swagger`.

### Frontend (React + Vite)

1. Abra o terminal na pasta `Frontend-react-product-app`.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

- O frontend ficará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).
- O formulário e a tabela estarão centralizados e funcionando com a API.

---

## Configurações adicionais

- **HTTPS**:

  - O `vite.config.js` já possui configuração de proxy para o backend.

- **Banco de dados InMemory**:

  - Configurado no `Program.cs` para testes rápidos, sem persistência entre reinícios.

- **Placeholder dos inputs**:

  - Customizável via CSS (`input::placeholder { color: #888; }`)

---

## Próximos passos / melhorias

- Persistência com SQLite ou SQL Server para dados permanentes.
- Adicionar paginação e ordenação na tabela de produtos.
- Permitir edição e exclusão de produtos via API e frontend.
- Adicionar filtros por categoria ou preço.
- Melhorar responsividade para dispositivos móveis.

