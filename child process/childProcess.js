const {spawn} = require("child_process")

const ls = spawn('ls', ['..', '-lh', '/usr'])

ls.stdout.on('data', (data) => { console.log(data); })
ls.stdout.on('close', (data) => { console.log(data); })