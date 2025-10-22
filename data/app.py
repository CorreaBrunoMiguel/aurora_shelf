from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"🧠 Orion Data": "FastAPI ativo — simulação de compressão"}
