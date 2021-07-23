const http = require("http")

//informações do servidor
const host = '127.0.0.1';
const port = 3000;

//url do servidor
const url = `http://${host}:${port}`;

// método para criar servidor local, recebe uma arrow function com os parametros requisição e resposta
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Bem vindo </h1>');
})

// sobe o servidor
server.listen(port, host, () => {
  console.log('Servidor rodando em ', url);
})

//variável que identifica o sistema operacional e pega o comando correto pra abrir uma url
const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');

//abre a url usando o comando correto do SO
require("child_process").exec('start ' + url)