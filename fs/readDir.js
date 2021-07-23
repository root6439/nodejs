const fs = require("fs")

fs.readdir(__dirname, (err, dados) => {
  if (err) throw err;

  dados.forEach(files => {
    console.log(__dirname + "\\" + files);
  })
})

