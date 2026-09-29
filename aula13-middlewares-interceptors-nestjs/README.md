NestJS — Projeto
Descrição

Repositório inicial em TypeScript utilizando o framework NestJS
 para desenvolvimento de aplicações eficientes e escaláveis no servidor.

Configuração do projeto

Instale as dependências do projeto:

npm install

Compilar e executar o projeto
# desenvolvimento
npm run start

# modo de observação (watch)
npm run start:dev

# produção
npm run start:prod

Executar os testes
# testes unitários
npm run test

# testes end-to-end
npm run test:e2e

# cobertura de testes
npm run test:cov

Implantação

Quando estiver pronto para colocar a aplicação em produção, existem algumas etapas importantes para garantir que ela seja executada de forma eficiente.

Consulte a documentação de implantação do NestJS para obter mais informações.

Também é possível utilizar o NestJS Mau para realizar a implantação da aplicação na AWS.

Observabilidade

Em aplicações de produção, a observabilidade é importante para entender o comportamento do sistema, identificar problemas antecipadamente e manter a aplicação confiável.

O NestJS Observe permite instrumentar a aplicação NestJS e oferece recursos como:

Rastreamento distribuído: acompanhamento das requisições entre diferentes serviços.

Análise de execução: visualização do fluxo das requisições e identificação de operações lentas.

Análise de desempenho: monitoramento do desempenho da aplicação.

Métricas: acompanhamento de métricas da aplicação e da infraestrutura.

Logs: centralização e correlação de registros.

Monitoramento de erros: identificação e investigação de erros.

Monitoramento de SLA: acompanhamento dos objetivos de nível de serviço.

Alertas: notificações sobre erros críticos, degradação de desempenho e outras anomalias.

Para adicionar o recurso ao projeto:

npm install @nestjs/observe

Recursos

Alguns recursos úteis para trabalhar com NestJS:

Documentação oficial do NestJS.

Canal oficial do Discord para dúvidas e suporte.

Cursos oficiais para aprofundamento no framework.

NestJS Mau para implantação na AWS.

NestJS Observe para rastreamento, métricas, logs e monitoramento.

NestJS Devtools para visualização e interação com a aplicação.

Suporte empresarial oficial.

Redes sociais oficiais do NestJS.

Quadro oficial de vagas de emprego.

⚠️ Problema de segurança identificado

Foi identificado um problema de controle de acesso na aplicação: o painel administrativo pode ser acessado por usuários que não deveriam possuir permissão administrativa.

Esse problema pode permitir que uma pessoa sem autorização tenha acesso a funcionalidades e informações destinadas exclusivamente aos administradores.

Status: em andamento para correção.

A correção está sendo realizada para garantir que o acesso ao painel administrativo seja devidamente protegido por autenticação e autorização, permitindo o acesso somente a usuários com as permissões necessárias.

Suporte

O NestJS é um projeto open source distribuído sob a licença MIT.

Licença

Este projeto utiliza a licença MIT.