//! importa o modulo 'os' do Node.js para obter informações sobre o servidor
const os = require('os');

//! exibe informações do sistema opereacional e hardware do servidor
console.log('===DIAGNÓTIGO DO SERVIDOR  ===\n');

const plataforma = os.platform();
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);
const cpus = os.cpus();

console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memória RAM total: ${memoriaTotal} GB`);
console.log(`Memória RAM livre: ${memoriaLivre} GB`);
console.log(`Cores da CPU: ${cpus.length}`);
console.log(`Processador: ${cpus[0].model}`);