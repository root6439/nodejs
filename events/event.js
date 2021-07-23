const EventEmitter = require("events");

class Evento extends EventEmitter {

}

const meuEvento = new Evento()

meuEvento.on('seguranca', (x, y) => {
  console.log("Executando evento 'segurança': " + x + ", " + y);
})

meuEvento.emit('seguranca', 'userAdmin', 'Alterou salário');

meuEvento.on('encerrar', (dados)=> {
  console.log("assinante: ", dados);
})

meuEvento.emit('encerrar', 'encerrando execução')