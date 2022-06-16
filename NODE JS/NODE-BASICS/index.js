// const welcome = 'Welcome to TY'
// console.log(welcome);

console.log('Program start');
// console.log('filename', __filename);
// console.log('process', process);
// console.log('module', module);
// console.log();

console.log('===========================================');

const fs = require('fs');
// console.log(fs);

const readData = fs.readFileSync('./Data/data.txt', 'utf-8');      // read the DATA from data file
console.log(readData)  ;

// fs.writeFileSync('./Data/sample.txt','hi bro')         
// fs.writeFileSync('./Data/sample.txt',readData)         //insert data in a sample file


// fs.writeFileSync('./Data/sample1.txt','hi bro')     //sample1.txt file is first checked if the file is present then the data is inserted if not present the node will create the file and insert the data.


fs.readFile('./Data/data.txt', 'utf-8', (err, data) => {
    // console.log(data); // async way to make program run in non-blocking
})
console.log('Program ended');