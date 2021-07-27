require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const subRoutes = require("./routes/subscribers")

mongoose.connect(process.env.DATABASE_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log("Conectado"))

app.use(express.json())
app.use("/subscribers", subRoutes)

app.listen(3000, '127.0.0.1', () => {
  console.log("Server up");
})