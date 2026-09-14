
## API Express — Tratamento de Erros
Projeto simples em Node.js + Express para demonstrar tratamento de erros síncronos, assíncronos e erros globais.

## 🚀 Instalação
npm install


Execute:

node server.js

Servidor disponível em:

http://localhost:3000
## 🛣️ Rotas
GET /sucesso — retorna uma operação realizada com sucesso.
GET /erro-sincrono — simula um erro síncrono.
GET /erro-assincrono — simula um erro em uma operação assíncrona.
## 🛡️ Tratamento de erros

O projeto utiliza:

try/catch para capturar erros.
next(erro) para encaminhar erros ao middleware.
Middleware global para padronizar respostas de erro.
uncaughtException e unhandledRejection para registrar erros não tratados.
Exemplo de resposta
{
  "success": false,
  "message": "Mensagem do erro"
}


Observação: no código original, corrija req.status() para res.status() e uncautghtExcepetion para uncaughtException.