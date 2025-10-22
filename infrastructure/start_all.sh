#!/bin/bash
echo "⚡️ Inicializando módulos Orion..."
(cd client && npm run dev &) 
(cd server && node index.js &) 
(cd data && uvicorn app:app --reload &) 
echo "🔥 Todos os módulos Aurora Shelf foram ativados!"
