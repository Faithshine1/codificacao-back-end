# Aula 12 - Request Response Advanced

Projeto desenvolvido com **NestJS** e **TypeScript**, com foco no estudo do fluxo de requisições e respostas HTTP, organização de controllers, services e módulos.

## 📁 Estrutura do projeto

```text
aula12-request-response-advanced/
├── dist/
├── node_modules/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── seguranca.controller.ts
├── package.json
├── package-lock.json
└── README.md

📌 Descrição dos arquivos
src/main.ts
Arquivo responsável pelo ponto de entrada da aplicação NestJS. É nele que a aplicação é inicializada e o servidor HTTP é executado.

src/app.module.ts
Módulo principal da aplicação. É responsável por organizar e registrar os controllers, services e demais componentes utilizados pelo projeto.

src/app.controller.ts
Controller principal da aplicação. É responsável por receber as requisições HTTP e retornar as respectivas respostas.

src/app.service.ts
Service responsável por concentrar funcionalidades e regras utilizadas pelo controller.

src/seguranca.controller.ts
Controller destinado às funcionalidades relacionadas à segurança da aplicação.

src/app.controller.spec.ts
Arquivo utilizado para realizar testes automatizados relacionados ao AppController.

🛠️ Tecnologias utilizadas
Node.js

TypeScript

NestJS

npm

⚙️ Instalação
Primeiramente, clone o repositório:

git clone <URL_DO_REPOSITORIO>

Entre na pasta do projeto:

cd aula12-request-response-advanced

Instale as dependências:

npm install

▶️ Executando o projeto
Para executar a aplicação em modo de desenvolvimento:

npm run start:dev

Para executar normalmente:

npm run start

Por padrão, a aplicação NestJS estará disponível em:

http://localhost:3000

🧪 Testes
Para executar os testes:

npm run test

Para executar os testes acompanhando alterações nos arquivos:

npm run test:watch

Para verificar a cobertura dos testes:

npm run test:cov

🏗️ Build
Para gerar a versão compilada do projeto:

npm run build

Os arquivos compilados serão disponibilizados na pasta:

dist/

🔄 Fluxo da aplicação
O NestJS utiliza uma arquitetura baseada principalmente em Modules, Controllers e Services.

O fluxo básico da aplicação pode ser representado da seguinte maneira:

Cliente
   │
   │ HTTP Request
   ▼
Controller
   │
   ▼
Service
   │
   │ Processamento
   ▼
Controller
   │
   │ HTTP Response
   ▼
Cliente

Request
A requisição HTTP é enviada pelo cliente para um endpoint disponibilizado pela aplicação.

Controller
O controller recebe a requisição e determina qual ação deverá ser executada.

Service
O service concentra a lógica da aplicação que será utilizada pelo controller.

Response
Após o processamento, o controller retorna uma resposta HTTP para o cliente.

🔐 Segurança
O projeto possui um controller específico para funcionalidades relacionadas à segurança:

src/seguranca.controller.ts

Esse arquivo pode conter endpoints e funcionalidades utilizados para trabalhar conceitos de segurança dentro da aplicação.

📚 Objetivo do projeto
O objetivo deste projeto é praticar conceitos relacionados ao desenvolvimento de APIs utilizando NestJS, especialmente:

Requisições HTTP;

Respostas HTTP;

Controllers;

Services;

Modules;

Organização de projetos NestJS;

Testes automatizados;

Conceitos básicos de segurança.

👨‍💻 Autor
Projeto desenvolvido para fins educacionais, como parte dos estudos de desenvolvimento de APIs utilizando NestJS e TypeScript.