import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('🧬 MongoDB conectado com sucesso.'))
  .catch((err) => console.error('Erro ao conectar MongoDB:', err));

app.get('/', (req, res) => res.send('🗣️ Orion Server ativo — Aurora Shelf'));

app.get('/data/ping', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.DATA_API_URL}/`);
    res.json(response.data);
  } catch (error) {
    console.error('Erro na comunicação:', error);
    res.status(500).json({ error: 'Falha na comunicação com Data API' });
  }
});

app.listen(4000, () => console.log('Servidor ativo na porta 4000.'));
