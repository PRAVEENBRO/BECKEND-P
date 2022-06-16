const fs = require('fs');
const readSteam = fs.createReadStream('../file/file.txt');

let readData=''
readSteam.on('open', () => {
    console.log("--------Reading stream has been created---------");
})

readSteam.on('data', (chunk) => {
    console.log('data from the file');
    // console.log(chunk);
    readData += chunk
    console.log(readData.toString());
})

readSteam.on('end', ()=>{
    console.log('--------Reading stream has been closed--------');
})