const fs = require('fs');

writeDataToFile = (filename, content) => {
    fs.writeFileSync(filename , JSON.stringify( content), 'utf8', (err) => console.log(err))
}



module.exports = {
    writeDataToFile
}