const fs = require('fs')

const createFileTable = (base, listar, hasta) => {
    return new Promise((resolve, reject) => {
        console.log('=========================')
        console.log(`Tabla del: ${base}`)
        console.log('=========================')

        let salida = ''

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${base} x ${i} = ${base * i}\n`
        }

        const nameFile = `files/tabla-${base}.txt`

        fs.writeFile(nameFile, salida, (err) => {
            if (err) {
                reject(err)
            }

            resolve(nameFile)
        })
        // SI LISTA VIENE EN TRUE MUESTRO LA TABLA COMPLETA
        if (listar) {
            console.log(salida)
        }
    })
}

//git checkout -- .

module.exports = {
    createFileTable
}