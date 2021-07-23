console.log("Mensagem normal");

console.error(new Error("Temos problemas"));

const carros = ['GM', 'Fiat', 'Ford', 'Volkswagen']

console.table(carros)

const dados = {
  name: 'Nicolas',
  empresa: 'Rezende',
  curso: 'NodeJS'
}

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')
console.count('processo')

console.countReset('processo')

console.time('contador')

setTimeout(() => {
  console.timeEnd('contador')
}, 4000);

console.assert(true, 'Alguma coisa')
console.assert(false, 'Erro')

// console.clear()