const { createFileTable } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

createFileTable(argv.b, argv.l, argv.h)
    .then(res => console.log(`Archivo ${res} creado correctamente.`))
    .catch(err => console.log(err))
