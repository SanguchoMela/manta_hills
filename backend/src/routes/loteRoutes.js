import express from 'express';
import { getLotes, getLoteById } from '../controllers/loteController.js';

const router = express.Router();

// Rutas
router.get('/', getLotes);         // Obtener todos los lotes
router.get('/:id', getLoteById);   // Obtener un lote por ID

export default router;
