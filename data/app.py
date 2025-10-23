from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Aurora Data API", version="1.0")

app.add_middleware(CORSMiddleware, 
                   allow_origins=["*"], 
                   allow_credentials=True, 
                   allow_methods=["*"], 
                   allow_headers=["*"])

@app.get("/")
def read_root():
    return {"🧠 Orion Data": "FastAPI ativo — simulação de compressão"}

@app.get('/ping')
def ping():
    return {"status": "🧬 Data Layer ativo e respondendo."}