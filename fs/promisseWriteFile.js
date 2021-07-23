const {writeFile} = require("fs");

function criaArquivo(name, content) {
  return new Promise( (resolve, reject) => {
    writeFile(name, content, err => {
      if (err) throw err;
      resolve();
    })
  })
}

criaArquivo('promiseArquivo.txt', 'criando arquivo usando promise').then(() => {
  console.log("tudo certo");
}).catch(err => {
  console.log(err);
})