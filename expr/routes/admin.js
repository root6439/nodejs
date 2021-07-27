const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Acessando adm")
})

router.get('/:id', (req, res) => {
  res.send("Olá mundo " + req.params.id)
})

router.post('/', (req, res) => {
  const corpo = `login ${req.body.login}, senha: ${req.body.password}`
  res.send("Acessando via post\n" + corpo)
})

router.patch('/', (req, res) => {
  res.send("Acessando administração via patch")
})

router.put('/', (req, res) => {
  res.send("Acessando administração via put")
})

router.delete('/', (req, res) => {
  res.send("Acessando administração via delete")
})

module.exports = router