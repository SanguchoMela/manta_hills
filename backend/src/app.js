import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import loteRoutes from './routes/loteRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // dirección de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Rutas
app.use('/api/lotes', loteRoutes);

export default app;
