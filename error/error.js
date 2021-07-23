function execute() {
  executeTo()
}

function executeTo() {
  throw new Error('Deu ruim')
}

function init() {
  try {
    execute();
  } catch (error) {
    console.log('Problema');
    console.log(error.message);
  }
}

init()

console.log("Após o erro");