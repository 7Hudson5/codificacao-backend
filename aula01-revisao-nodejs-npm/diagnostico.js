const os = require('os');

console.log('=== diagnostico do servidor ===\n');

const plataforma = os.platform(); 
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);
const cpus = os.cpus();

console.log(`arquitetura OS: ${plataforma}`);
console.log(`memoria RAM total: ${memoriaTotal} GB`);
console.log(`memoria RAM livre: ${memoriaLivre} GB`);
console.log(`cores da cpu: ${cpus.length}`);
console.log(`processador: ${cpus[0].model}`);