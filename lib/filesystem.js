
const fs = require('fs')

const folderPath = '/Users/teerthatmuri/code/'

fs.readdir(folderPath, (error, files) => {
    for(let file of files) {
        console.log(file)
    }
})