import { Lote } from '../models/loteModel.js';

/**
 * Obtener todos los lotes
 */
export const getLotes = async (req, res) => {
  try {
    const lotes = await Lote.find(); // obtiene todos los registros
    res.status(200).json(lotes);
  } catch (error) {
    console.error('❌ Error al obtener lotes:', error.message);
    res.status(500).json({ message: 'Error del servidor al obtener lotes' });
  }
};

/**
 * Obtener un lote por ID
 */
export const getLoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const lote = await Lote.findById(id);

    if (!lote) {
      return res.status(404).json({ message: 'Lote no encontrado' });
    }

    res.status(200).json(lote);
  } catch (error) {
    console.error('❌ Error al obtener lote:', error.message);
    res.status(500).json({ message: 'Error del servidor al obtener el lote' });
  }
};
