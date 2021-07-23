const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
const dados = fs.readFileSync("file.txt");
console.log("Executando console após arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));