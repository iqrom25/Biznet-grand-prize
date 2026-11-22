const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT) || 8080;
const page = path.join(__dirname, "index.html");

http.createServer((req, res) => {
  if (req.url.split("?")[0] === "/health") { res.writeHead(200); return res.end("ok"); }
  fs.readFile(page, (err, data) => {
    res.writeHead(err ? 500 : 200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(err ? "Error" : data);
  });
}).listen(port, () => console.log(`Listening on ${port}`));
