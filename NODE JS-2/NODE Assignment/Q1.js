const fs = require('fs');
// const { readFile } = require('fs/promises');


const readfile = () => {
    fs.readFile('folder/demo.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('data', data);
        }
    })
}


const writeFile = () => {
    fs.writeFile('folder/demo.txt', 'hi praveenaa', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('file created and writen')
        }
    })
}


const appendFile = () => {
    fs.appendFile('folder/demo.txt', ' dhadda dhadda dhadda', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('file created and writen')
        }
    })
}

const rename = () => {
    fs.rename('folder/demo.txt', 'folder/devil.txt', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('rename successfull');
        }
    })
}

fs.exists('folder', (exists) => {
    if (!exists) {
        fs.mkdir('folder', (folder) => {
            if (folder) {
                console.log('file not created');
            } else {

                writeFile()
                readfile()
                setTimeout(() => {
                    appendFile()
                    readfile()
                    rename()
                }, 5000);

            }
        })
    } else {

        writeFile()
        readfile()
        setTimeout(() => {
            appendFile()
            readfile()
            rename();
        }, 5000);

    }
})


