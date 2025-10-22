#!/bin/bash
echo "⚡️ Iniciando sincronização Aurora Shelf..."
(uvicorn data.app:app --reload &) 
(cd server && npm start &) 
(cd client && npm run dev &) 
echo "🌙 Pulso Orion estabilizado — todos os módulos sincronizados!"
