const path = require('path')
const filePath= path.parse(__filename)
// console.log(filePath);
console.log('root:',filePath.root);
console.log('dir:',filePath.dir);
console.log('base:',filePath.base);
console.log('ext:',filePath.ext);
console.log('name:',filePath.name);