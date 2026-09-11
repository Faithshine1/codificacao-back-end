import fs from 'fs';

const streamEscrita = fs .createWriteStream('Servidor.log');
console.log('Gerando Arquivo de log simulado...');