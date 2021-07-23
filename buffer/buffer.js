const Buffer = require("buffer").Buffer

const buf = Buffer.from('Curso completo de NodeJS')

console.log(buf.toString());

console.log(buf.toString('utf16le'));

const buf_string = Buffer.from('Carregando uma string', 'utf8')

console.log(buf_string.toString());

console.log(Buffer.isBuffer(buf_string));