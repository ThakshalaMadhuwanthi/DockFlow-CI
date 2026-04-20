const http = require('http');

const server = http.createServer((req, res) => {
  
  res.writeHead(200, { 
    'Content-Type': 'text/html; charset=utf-8'  
  });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Pipeline</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #000000; /* 🖤 black background */
          color: white;
          text-align: center;
          padding-top: 100px;
          margin: 0;
        }

        .card {
          background-color: #1e90ff; /* 🔵 blue box */
          padding: 30px;
          border-radius: 15px;
          display: inline-block;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
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
          background-color: #ffffff;
          color: #1e90ff;
        }

        #msg {
          margin-top: 15px;
          font-size: 18px;
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