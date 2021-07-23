const fs = require("fs").promises;

async function read() {
  const data = await fs.readFile('text.txt', 'binary')
  return new Buffer.from(data);
}

try {
  read().then(data => console.log(data.toString()))
} catch(err) {
  console.log(err);
}