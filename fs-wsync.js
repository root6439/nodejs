const fs = require("fs")

console.log((process.hrtime()[0]/60).toFixed(5));

const dados = fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log("Executando leitura")
});

console.log("Executando console após arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));