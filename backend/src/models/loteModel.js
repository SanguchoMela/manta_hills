import mongoose from 'mongoose';

const loteSchema = new mongoose.Schema(
  {
    etapa: {
      type: Number,
      required: true,
    },
    mz: {
      type: String,
      required: true,
    },
    lote: {
      type: Number,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    nombre_cliente: {
      type: String,
      required: true,
    },
    valor_m2: {
      type: Number,
      required: true,
    },
    valor_total: {
      type: String,
      required: true,
    },
    valor_por_pagar: {
      type: String,
      required: true,
    },
    valor_pagado: {
      type: String,
      required: true,
    },
    vencidas: {
      type: Number,
      required: true,
    },
    valor_vencido: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt
  }
);

// Exportar el modelo
export const Lote = mongoose.model('Lote', loteSchema);
