const http = require('http');
http.createServer((req, res) => {
  res.end("DevOps Pipeline Running 🚀");
}).listen(3000);