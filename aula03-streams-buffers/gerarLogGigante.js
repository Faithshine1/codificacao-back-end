import fs from 'fs';

const streamEscrita = fs .createWriteStream('Servidor.log');
console.log('Gerando Arquivo de log simulado...');

for(let i = 0; i < 200000; i++){
    const tipo = i % 7 === 0 ? 'ERROR' : 'INFO';
    streamEscrita.write(`[2026-09-11] Line ${i}: Status 200 - mensagem de teste ${tipo}\n`);
}
streamEscrita.end();