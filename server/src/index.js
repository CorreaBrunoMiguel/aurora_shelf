import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('🗣️ Orion Server ativo — Aurora Shelf'));
app.listen(4000, () => console.log('Servidor ativo na porta 4000.'));
