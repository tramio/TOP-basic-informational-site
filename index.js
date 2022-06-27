const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
  const requestedUrl = url.parse(req.url, true);
  const requestedFile =
    requestedUrl.pathname === "/" || ""
      ? "./pages/index.html"
      : `./pages${requestedUrl.pathname}.html`;

  fs.readFile(requestedFile, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (err, data) => {
        if (err) {
          console.log(err);
        }
        else {
          res.writeHead(404, {
            "Content-Type": "text/html",
          });
          res.write(data);
          res.end();
        }
      });
    }
    else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end();
    }
  })
});

server.listen(port);