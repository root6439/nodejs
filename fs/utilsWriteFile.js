const {promisify} = require("util")

const writeFile = promisify(require("fs").writeFile);
const conteudo = 'Criando arquivo usando promisify'


writeFile('utilArquivo.txt', conteudo).then(resp => {
  console.log("Tudo certo");
}).catch(err => {
  console.log(err);
})