const fs = require('fs')

console.log('program start');

const readFile = () => {
    fs.readFile('file/file.txt','utf-8', (err, data) => {
        if (err) {
            console.log(first);
        } else {
            console.log('data:-', data)
        }
    })
}


const writeFile = () => {
    fs.writeFile('file/file.txt','writing the data', (err) => {
        if (err) {
            console.log(first);
        } else {
            console.log('file created and writen')
        }
    })
}


fs.exists('file', (exists) => {
    if (!exists) {
        fs.mkdir('file', (folderErr) => {
            if (folderErr) {
                console.log('folder not created');
            }
            else {
                
                readFile();
                writeFile();
            }
        }
        )
    } else {
        writeFile();
    }


})
console.log('program end');