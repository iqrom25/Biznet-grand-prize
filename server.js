const http = require("http");
const fs = require("fs");
const path = require("path");

const page = path.join(__dirname, "index.html");

function handler(req, res) {
  if (req.url.split("?")[0] === "/health") { res.writeHead(200); return res.end("ok"); }
  fs.readFile(page, (err, data) => {
    res.writeHead(err ? 500 : 200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(err ? "Error" : data);
  });
}

// NEO App tidak punya kolom port, jadi dengarkan PORT (kalau diset) plus port umum.
const ports = [...new Set([Number(process.env.PORT), 8080, 3000, 80, 5000].filter(Boolean))];
for (const port of ports) {
  const srv = http.createServer(handler);
  srv.on("error", (e) => console.log(`Port ${port} skipped: ${e.code}`));
  srv.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));
}
