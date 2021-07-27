const express = require("express")
const router = express.Router()

router.get('/', logReq, (req, res) => {
  res.send("Acessando lista de usuários")
})

router.get('/:id', (req, res) => {
  res.send("Usuário:  " + req.params.id)
})

router.post('/', (req, res) => {
  const corpo = `login ${req.body.login}, senha: ${req.body.password}`
  res.send("Acessando via post\n" + corpo)
})


function logReq(req, res, next) {

  console.log("Executando função midleware para a rota usuário");

  return next()

}

module.exports = router