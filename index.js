// index.js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello World from Nldflkgdpkfode.js in Docker!');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
