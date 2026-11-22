# Biznet Grand Prize

Halaman pribadi: "Aku menang Grand Prize Biznet!" 🏆

## Jalankan lokal
```bash
npm start   # http://localhost:8080
```

## Deploy ke NEO App (Biznet Gio)
Aplikasi Node.js tanpa dependency. `index.html` ada di root repo, jadi bisa di-deploy sebagai **Static site** (publish directory: root, tanpa build command) atau sebagai **Web service** Node.js. Server membaca port dari env `PORT` (default 8080), health check di `/health`.

**Lewat Git:** di dashboard NEO App buat app baru → hubungkan repo ini → runtime Node.js, start command `npm start`.

**Lewat MCP (chat-to-deploy):** repo ini sudah berisi `.mcp.json` (server `neo-app`). Login sekali di terminal (token disimpan di `~/.config/neo-app`, tidak di repo):
```bash
npx -y @biznetgio/neo-app@latest login
```
Buka Claude Code di folder ini, lalu minta: "deploy repo ini ke NEO App".

**Lewat CLI langsung:**
```bash
npx -y @biznetgio/neo-app@latest project create biznet-grand-prize
npx -y @biznetgio/neo-app@latest deploy . --type web --port 8080
```
