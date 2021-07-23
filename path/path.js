const path = require("path")

console.log('basename ', path.basename('C:\\Users\\nicol\\Documents\\Projetos\\Nodejs\\demon.js'));

console.log('normalize ', path.basename('C:\\Users\\nicol/Documents//Projetos\\Nodejs/demon.js'));

console.log('join path ', path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..'));

console.log('resolve ', path.resolve('C:\\Users\\nicol\\Documents\\Projetos\\Nodejs\\demon.js'));

console.log('extension ', path.extname('C:\\Users\\nicol\\Documents\\Projetos\\Nodejs\\demon.js'));

