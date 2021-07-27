const express = require("express")
const app = express()
const adminRoutes = require("./routes/admin")
const userRoutes = require("./routes/usuario")
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())
app.use('/static', express.static('public'))

app.use((req, res, next) => {
  console.log("Executando midleware em nível de aplicação");
  return next()
})

app.get("/setcookie", (req, res) => {
  res.cookie('user', 'Nicolas Soares', {maxAge: 900000, httpOnly: true})
  return res.send("Cookie gravado com sucesso")
})

app.get("/getcookie", (req, res) => {
  let user = req.cookies['user']
  if(user) {
    res.send(user)
  }
})

app.get('/', (req, res) => {
  res.send("Olá mundo")
})

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)

app.get("/*", (req, res, next) => {
  setImmediate(() => {
    next( new Error("Temos um problema"))
  })
})

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: err.message })
})

app.listen(3000, () => {
  console.log('servidor up');
})