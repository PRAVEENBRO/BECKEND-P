const validator = require('validator')
const isValid = validator.isEmail('devil@gmail.com')
console.log(isValid);
const date =new Date();

console.log(validator.isLowercase('fghjk'));
console.log(validator.equals('123', '123'));
console.log('date', date);
console.log(validator.isDate('2002-07-15', date));


