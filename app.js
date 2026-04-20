const http = require('http');

const server = http.createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Pipeline</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          text-align: center;
          padding-top: 100px;
        }

        .card {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 15px;
          display: inline-block;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        button {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 20px;
          font-size: 16px;
        }

        button:hover {
          background: #00c6ff;
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 DevOps Pipeline Running</h1>
        <p>Welcome to your Docker + Node.js deployment!</p>
        
        <button onclick="showMessage()">Click Me</button>
        <p id="msg"></p>
      </div>

      <script>
        function showMessage() {
          document.getElementById('msg').innerHTML =
            "🔥 Hello from your containerized app!";
        }
      </script>
    </body>
    </html>
  `);

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});