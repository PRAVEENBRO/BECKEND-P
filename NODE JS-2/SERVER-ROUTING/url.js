const url = require('url')

const http = require('http')

http.createServer((request, responce) => {
    const reqUrl = url.parse(request.url, true);
    console.log(reqUrl.query.id);
    console.log(reqUrl.query.name);
    console.log(reqUrl.query.age);
    responce.write('this has come from server')
    responce.write(JSON.stringify(reqUrl.query));
    responce.end('url is working fine');
}).listen(9000, () => {
    console.log('server is running at port no 9000');
})