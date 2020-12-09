const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log("oi")
    pathsToRows(paths)
        .then(rows => console.log(rows))
        .then(() => {
            event.reply('process-subtitles', [
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "she", amount: 1234 },
                { name: "our", amount: 900 },
                { name: "house", amount: 853 },
            ])
        })
}) 