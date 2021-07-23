
// Recebe um valor e uma função para ser executada assim que o timeout tiver sido completado
function soma(x, callback) {
  return setTimeout(() => {
    return callback(null, x + 5000);
  }, 3000);
}

// Função apresenta erro pois não possui callback, no log é imprimido o timeout ao invés da variável
// function escreve() {
//   console.log("executando escreve", soma(270));  
// }
// escreve();
// console.log(soma(270));

//callback function
function resolveSoma(err, result) {
  if (err) throw err;
  console.log(result);
}

//envia como parametro o valor e a função callback para ser executada quando o processamento estiver sido concluído
soma(200, resolveSoma);