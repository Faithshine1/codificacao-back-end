
##  📄 Processamento de Logs com Streams
Projeto em Node.js que utiliza Streams para gerar e processar arquivos de log sem precisar carregar todo o conteúdo na memória.
## 🚀 Como executar

Execute primeiro o arquivo que gera os logs:

node gerarLog.js


Depois execute o arquivo que filtra os erros:

node filtrarErros.js


## 🔹 Gerador de Logs

Cria o arquivo servidor.log com 200.000 linhas, alternando entre registros INFO e ERROR.

A cada 7 linhas, aproximadamente, um registro é marcado como ERROR.

## 🔹 Filtro de Erros

Lê o arquivo servidor.log linha por linha utilizando readline e fs.createReadStream().

As linhas que contêm ERROR são gravadas em:

apenas_erros.log


Ao final, o programa informa:

Quantidade de erros encontrados.
Consumo de memória no início e no final do processamento.
## 🎯 Objetivo

Demonstrar o uso de Streams no Node.js para trabalhar com arquivos grandes de forma eficiente, evitando carregar todo o arquivo na memória de uma só vez.