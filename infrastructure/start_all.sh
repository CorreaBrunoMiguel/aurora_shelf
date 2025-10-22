#!/bin/bash
# ============================================================
# Orion vF2.1 — Infra Layer
# start_all.sh
# Função: iniciar MongoDB, Server (Express) e Client (Vite)
# ============================================================

# -------- utilitários básicos ----------
log() {
  echo -e "\n\033[1;36m[Orion]\033[0m $1"
}

# Detectar raiz do projeto (um nível acima da pasta infrastructure)
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_ROOT" || exit 1

# -------- iniciar MongoDB --------------
log "🧬 Iniciando MongoDB local..."
mongod --dbpath /data/db --fork --logpath /tmp/mongodb.log
sleep 3

# -------- iniciar Server ---------------
log "🌐 Iniciando Orion Server..."
cd "$PROJECT_ROOT/server" || exit 1
npm run dev &
SERVER_PID=$!
sleep 4

# -------- iniciar Client ---------------
log "🪞 Iniciando Orion Client..."
cd "$PROJECT_ROOT/client" || exit 1
npm run dev &
CLIENT_PID=$!
sleep 2

# -------- status final -----------------
log "✅ Todos os serviços foram iniciados com sucesso!"
log "   - Server: http://localhost:4000"
log "   - Client: http://localhost:5173"

# Manter script vivo para encerramento limpo
wait $SERVER_PID $CLIENT_PID
