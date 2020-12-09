// const { reject } = require('core-js/fn/promise')
const fs = require('fs')

module.exports = paths => {
    console.log("aqui1")
    return new Promise((resolver, reject) => {
        try{
            //console.log("aqui2")
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split('\n')
                resolver(rows)
        }catch(e){
            reject(e)
        }
    })
}