const http = require("http");
const fs = require("fs");

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.end("Server Error");
    }

    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    serveFile(res, "index.html");
  } 
  else if (url === "/about") {
    serveFile(res, "about.html");
  } 
  else if (url === "/contact-me") {
    serveFile(res, "contact-me.html");
  } 
  else {
    serveFile(res, "404.html");
  }
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});