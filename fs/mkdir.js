const fs = require("fs")
const assets = ['css', 'js', 'images', 'lib'];



function make(pastas) {

  pastas.forEach(x => {
    //função para criar diretórios, no caso a seguir cria vários diretórios
    fs.mkdir(`projeto/assets/${x}`, {
      recursive: true
    }, (err) => {
      if (err) throw err;
      console.log("Diretório criado: ", x);
    })
  });


}

make(assets)