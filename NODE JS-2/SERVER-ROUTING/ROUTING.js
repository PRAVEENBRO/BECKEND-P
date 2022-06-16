const http= require('http');
const handler= require('./HANDLER')

const server = http.createServer(handler.handleRequest).listen(4000, ()=>{
    console.log('server is running at localhost 4000');
})