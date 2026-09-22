<p align="center"> <a href="https://nestjs.com/" target="_blank"> <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /> </a> </p> <p align="center"> Projeto desenvolvido para estudar <strong>rotas dinâmicas</strong> utilizando <strong>NestJS</strong> e <strong>TypeScript</strong>. </p> <p align="center"> <a href="https://nestjs.com/" target="_blank"> <img src="https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white" alt="NestJS" /> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /> </a> </p>
Descrição
Este projeto demonstra como criar uma API simples para trabalhar com livros utilizando NestJS.

Cada livro possui apenas duas informações:

{
  "id": 1,
  "titulo": "Nome do livro"
}

O principal objetivo do projeto é aprender a utilizar rotas dinâmicas para buscar um livro específico através do seu id.

Estrutura dos livros
Cada livro possui:

id — identificador do livro.

titulo — título do livro.

Exemplo:

{
  "id": 1,
  "titulo": "O Senhor dos Anéis"
}

O que são rotas dinâmicas?
Uma rota dinâmica permite utilizar uma parte variável dentro da URL.

Por exemplo:

/livros/:id

O :id representa um valor que pode mudar.

Podemos acessar:

/livros/1
/livros/2
/livros/3

A estrutura da rota continua sendo a mesma:

/livros/:id

O que muda é o valor do id.

Rota para listar os livros
Para buscar todos os livros, podemos utilizar:

GET /livros

Exemplo de resposta:

[
  {
    "id": 1,
    "titulo": "O Senhor dos Anéis"
  },
  {
    "id": 2,
    "titulo": "Harry Potter"
  }
]

Rota dinâmica para buscar um livro
Para buscar um livro específico pelo id:

GET /livros/:id

Por exemplo:

GET /livros/1

O 1 será recebido como parâmetro da rota.

No NestJS:

@Get(':id')
findOne(@Param('id') id: string) {
  // buscar livro pelo id
}

O parâmetro é obtido através do @Param().

Exemplo de Controller
Um controller simples pode ser:

import { Controller, Get, Param } from '@nestjs/common';

@Controller('livros')
export class LivrosController {

  @Get()
  findAll() {
    return [
      {
        id: 1,
        titulo: 'O Senhor dos Anéis',
      },
      {
        id: 2,
        titulo: 'Harry Potter',
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      id,
      titulo: `Livro ${id}`,
    };
  }
}

Rotas disponíveis
Método	Rota	Descrição
GET	/livros	Lista todos os livros
GET	/livros/:id	Busca um livro pelo ID

Listar livros
GET /livros

Buscar um livro
GET /livros/1

Outro exemplo
GET /livros/2

Perceba que não precisamos criar uma rota diferente para cada livro.

Criamos apenas:

/livros/:id

E o valor do id muda conforme a requisição.

Como funciona o @Param()
Na rota:

@Get(':id')

o :id é o parâmetro dinâmico.

Quando fazemos:

GET /livros/10

o NestJS recebe:

id = 10

Esse valor pode ser acessado com:

@Param('id') id: string

Podemos então utilizar o id para encontrar o livro correspondente.

Instalação
Instale as dependências do projeto:

npm install

Executando o projeto
Para iniciar a aplicação:

npm run start

Para iniciar em modo de desenvolvimento:

npm run start:dev

A API estará disponível em:

http://localhost:3000

Testando
Depois de iniciar o projeto, podemos testar as rotas.

Listar todos os livros:

GET http://localhost:3000/livros

Buscar o livro de ID 1:

GET http://localhost:3000/livros/1

Buscar o livro de ID 2:

GET http://localhost:3000/livros/2

Exercício
A ideia deste projeto é praticar a criação de uma rota dinâmica.

Implemente:

GET /livros/:id

A rota deve receber o id pela URL e retornar o livro correspondente.

Cada livro deve possuir somente:

{
  "id": 1,
  "titulo": "Nome do livro"
}

Scripts
# desenvolvimento
npm run start

# watch mode
npm run start:dev

# produção
npm run start:prod

# testes
npm run test

# testes e2e
npm run test:e2e

# cobertura
npm run test:cov

Licença
Este projeto foi desenvolvido para fins de estudo e aprendizado de NestJS.

