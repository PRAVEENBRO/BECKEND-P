const fs = require('fs')

try {
    // const data = fs.readFile('./file/file.txt');
    const data = fs.readFile('./file/file.txt', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            console.log(data.toString());
        }
    });
} catch (err) {
    console.log('error has been found');
    console.log(err);
}

// console.log(data.toString());