const {EventEmitter} = require("events")
const emitter = new EventEmitter()

const validaObjeto = (a) => {
  if (typeof a !== 'object') {
    emitter.emit('error', new Error('Objeto inválido'))
  } else {
    console.log('Válido');
  }
}

emitter.addListener('error', (err) => {
  console.log('Evento: ' + err.message);
})

let dados = {nome: 'Nicolas', curso: 'NodeJS'}

validaObjeto('123')