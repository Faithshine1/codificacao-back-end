# 🛒 API de Produtos — NestJS

Uma API REST desenvolvida com **NestJS** e **TypeScript** para gerenciamento e consulta de produtos.

O projeto utiliza a arquitetura do NestJS separando as responsabilidades entre **Controller** e **Service**, além de possuir validação de parâmetros e tratamento de erros HTTP.

## 🚀 Tecnologias utilizadas

* **Node.js**
* **NestJS**
* **TypeScript**
* **JavaScript/ES Modules**

## 📋 Funcionalidades

Atualmente, a API possui as seguintes funcionalidades:

* Listagem de produtos.
* Busca de um produto específico pelo ID.
* Validação do ID informado na URL.
* Retorno de erro `400 Bad Request` quando o ID não é numérico.
* Retorno de erro `404 Not Found` quando o produto não existe.
* Registro de avisos no console utilizando o `Logger` do NestJS.

## 📦 Produtos cadastrados

A aplicação possui inicialmente os seguintes produtos:

| ID | Produto       |     Preço |
| -: | ------------- | --------: |
|  1 | Teclado Gamer | R$ 199,90 |
|  2 | Mouse Gamer   |  R$ 99,99 |
|  3 | Monitor 144Hz | R$ 899,99 |
|  4 | Headset RGB   | R$ 149,99 |
|  5 | Cadeira Gamer | R$ 499,99 |

## 📂 Estrutura principal

```text
src/
├── produtos.controller.ts
└── produtos.service.ts
```

### `produtos.service.ts`

O `ProdutoService` é responsável por armazenar os produtos e disponibilizar o método:

```typescript
listarProdutos()
```

Esse método retorna a lista de produtos cadastrados.

O service utiliza o decorator `@Injectable()`, permitindo que ele seja utilizado através da injeção de dependência do NestJS.

### `produtos.controller.ts`

O `ProdutosController` é responsável por receber as requisições relacionadas aos produtos.

A rota principal utilizada pelo controller é:

```text
/produtos
```

O controller utiliza o `ProdutoService` para acessar a lista de produtos.

Também existe uma rota para consultar um produto pelo ID:

```text
GET /produtos/:id
```

## 🔌 Endpoints

### Listar produtos

**GET**

```text
/produtos
```

Retorna todos os produtos cadastrados.

#### Exemplo de resposta

```json
[
  {
    "id": 1,
    "nome": "Teclado Gamer",
    "preco": 199.9
  },
  {
    "id": 2,
    "nome": "Mouse Gamer",
    "preco": 99.99
  },
  {
    "id": 3,
    "nome": "Monitor 144Hz",
    "preco": 899.99
  },
  {
    "id": 4,
    "nome": "Headset RGB",
    "preco": 149.99
  },
  {
    "id": 5,
    "nome": "Cadeira Gamer",
    "preco": 499.99
  }
]
```

### Buscar produto por ID

**GET**

```text
/produtos/:id
```

Exemplo:

```text
GET /produtos/1
```

Resposta:

```json
{
  "id": 1,
  "nome": "Teclado Gamer",
  "preco": 199.9
}
```

## ⚠️ Tratamento de erros

A API possui tratamento para dois tipos de situações.

### ID inválido

Caso seja informado um ID que não seja numérico:

```text
GET /produtos/abc
```

A API retorna:

```text
400 Bad Request
```

Mensagem:

```json
{
  "message": "ID Inválido. Deve ser um número inteiro!"
}
```

Além disso, uma mensagem de aviso é registrada pelo `Logger` do NestJS.

### Produto não encontrado

Caso seja informado um ID numérico que não exista:

```text
GET /produtos/99
```

A API retorna:

```text
404 Not Found
```

Mensagem:

```json
{
  "message": "Produto com ID 99 não localizado."
}
```

O evento também é registrado no console através do `Logger`.

## ⚙️ Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run start
```

Para utilizar o modo de desenvolvimento com atualização automática:

```bash
npm run start:dev
```

Depois de iniciar a aplicação, você poderá acessar os endpoints através do endereço configurado pelo NestJS.

Por exemplo:

```text
http://localhost:3000/produtos
```

## 🧠 Conceitos praticados

Este projeto foi desenvolvido para praticar conceitos fundamentais do **NestJS**, como:

* Controllers
* Services
* Injeção de dependência
* Decorators
* Rotas HTTP
* Parâmetros de rota com `@Param()`
* `@Get()`
* Tratamento de exceções
* `BadRequestException`
* `NotFoundException`
* Sistema de logs com `Logger`
* TypeScript
* Estrutura de uma API REST

## 📌 Observação

Os produtos atualmente são armazenados diretamente em memória dentro do `ProdutoService`. Portanto, os dados não utilizam banco de dados e podem ser perdidos quando a aplicação for reiniciada.

## 👨‍💻 Projeto

Projeto desenvolvido para estudos e prática de desenvolvimento de APIs utilizando **NestJS + TypeScript**.

---

**NestJS + TypeScript 🚀**
