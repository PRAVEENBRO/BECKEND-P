const fs = require('fs')
const http = require('http')

const url = require('url')


http.createServer((request, response) => {

    const broUrl = url.parse(request.url, true)

    const data = JSON.stringify(broUrl.query)
    if (broUrl === {}) {
        console.log('enter data');
    } else {
        console.log('initial ', data);
        fs.appendFileSync('folder/data.txt', data)
    }

    response.end(JSON.stringify(broUrl.query))
}).listen(1231, () => {
    console.log('server is running at port number 1231');
})

