const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'Muestra la tabla de multiplicar en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Hasta que número se multiplicará',
            default: 10
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw `El valor de b debe ser un número.`
        }

        if (isNaN(argv.h)) {
            throw `El valor de h debe ser un número.`
        }
        return argv
    })
    .argv

module.exports = argv