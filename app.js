const http = require('http');
http.createServer((req, res) => {
  res.end("DevOps Pipeline is Running 🚀");
}).listen(3000);