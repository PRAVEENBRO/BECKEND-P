const http= require('http');
const server = http.createServer((request, response)=>{
console.log('server has been created');
console.log('request', request);
console.log('response', response);
response.write(' hi praveen bro   ')
response.write(' DEVIL IS BACK  ')
response.end('  this is the first server we have created')
})
server.listen(5000,()=>{
    console.log('server is started');
})