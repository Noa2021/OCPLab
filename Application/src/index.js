// Simple Node.js HTTP server
const http = require('http');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from OCPLab Application\n');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`OCPLab Application listening on port ${PORT}`);
});