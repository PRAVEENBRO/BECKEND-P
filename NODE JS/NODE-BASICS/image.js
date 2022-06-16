const http = require('http');
const fs = require('fs');


// http.createServer((req, res) => {

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.readFileSync('/img01.png')
//     // fs.readFileSync('img01.jpg', (err, data) => {
//     //     if (err) throw err;
//     //     res.write(data);
//     // });
//     res.end();

// }).listen(8124, () => {
//     console.log('Server running at 8124');
// });


http.createServer((request, response) => {

  if (request.url === '/') {
    response.end('home page')
  }
  else if (request.url === '/about') {
    response.end('about page')
  }
  else if (request.url === '/contact') {
    response.end('contact page')
  }
  else if (request.url === '/login') {
    response.end('login page')
  }

  else if (request.url === '/userdata') {

    fs.readFile('metadata/json-data.txt', 'utf-8', (err, data) => {
      response.end(data[2].name)
    })
  }
  else {
    // response.write(404, { 'Content-type': 'text/html' })
    response.end(`<h1>404 error page not found</h1>`)
  }

}).listen(5632, () => {
  console.log('server is running at 5632');
})

