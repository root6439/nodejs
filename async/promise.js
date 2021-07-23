
// Recebe um valor e retorna uma promessa de que o processamento será realizado, e retorna o resultado ou erro
function soma(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  })
}

//envia como parametro o valor e diz para o promisse imprimir no console o valor processado ou o erro
soma(400).then(resp => {
  console.log(resp);
}).catch(err => {
  console.log(err);
})