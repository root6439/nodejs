const http = require("http")
const {readFile} = require("fs")

const host = '127.0.0.1'
const port = 3000
const url = `http://${host}:${port}`

let conteudo = ''

readFile('index.html', (err, data) => {
  if (err) throw err;
  conteudo = data
})

const server = http.createServer((req, resp) => {
  resp.statusCode = 200
  resp.setHeader('Content-Type', 'text/html')
  resp.end(conteudo)
})

server.listen(port, host, () => {
  console.log('servidor rodando');
})

require("child_process").exec('start ' + url)