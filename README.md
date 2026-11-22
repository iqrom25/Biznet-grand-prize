# Biznet Grand Prize

Halaman pribadi: "Aku menang Grand Prize Biznet!" 🏆

## Jalankan lokal
```bash
npm start   # http://localhost:8080
```

## Deploy ke NEO App (Biznet Gio)
Aplikasi Node.js tanpa dependency. Server membaca port dari env `PORT` (default 8080), health check di `/health`.

**Lewat Git:** di dashboard NEO App buat app baru → hubungkan repo ini → runtime Node.js, start command `npm start`.

**Lewat MCP (chat-to-deploy):** ambil URL server MCP + token dari dashboard NEO App, lalu:
```bash
claude mcp add --transport http neo-app <URL_MCP_DARI_DASHBOARD> --header "Authorization: Bearer <TOKEN>"
```
Setelah itu minta Claude: "deploy repo ini ke NEO App".
