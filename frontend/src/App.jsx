import { useEffect, useState } from 'react';

function App() {
  const [lotes, setLotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroLote, setFiltroLote] = useState('');
  const [filtroMz, setFiltroMz] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLotes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener lotes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl text-gray-600">Cargando...</div>;
  }

  // Filtro exacto
  const lotesFiltrados = lotes.filter(lote => {
    const coincideLote = filtroLote === '' || lote.lote.toString() === filtroLote;
    const coincideMz = filtroMz === '' || lote.mz.toLowerCase() === filtroMz.toLowerCase();
    return coincideLote && coincideMz;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex flex-col items-center mb-10">
        <img
          src="/logoMH.png"
          alt="Logo de la empresa"
          className="w-32 h-auto mb-3"
        />
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          Manta Hills
        </h1>
      </header>

      {/* Filtros */}
      <div className="flex justify-center mb-8 space-x-4">
        <input
          type="text"
          placeholder="manzana"
          className="border border-gray-300 rounded-md px-4 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={filtroMz}
          onChange={(e) => setFiltroMz(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lote "
          className="border border-gray-300 rounded-md px-4 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={filtroLote}
          onChange={(e) => setFiltroLote(e.target.value)}
        />
      </div>

      {/* Cards corporativas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lotesFiltrados.map((lote) => (
          <div
            key={lote._id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition p-6"
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800">{lote.nombre_cliente}</h2>
              <p className="text-gray-500 text-sm">Cliente</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
              <p><span className="font-semibold">Manzana:</span> {lote.mz}</p>
              <p><span className="font-semibold">Lote:</span> {lote.lote}</p>
              <p><span className="font-semibold">Área:</span> {lote.area} m²</p>
              <p><span className="font-semibold">Valor Total:</span> ${lote.valor_total}</p>
              <p className='text-green-500'><span className="font-semibold">Valor Pagado:</span> ${lote.valor_pagado}</p>
              <p><span className="font-semibold">Valor Por Pagar:</span> ${lote.valor_por_pagar}</p>
              <p><span className="font-semibold">Cuotas Vencidas:</span> {lote.vencidas}</p>
              <p className='text-red-500'><span className="font-semibold">Valor Vencido:</span> ${lote.valor_vencido}</p>
            </div>
          </div>
        ))}
      </div>

      {lotesFiltrados.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No se encontraron lotes</p>
      )}
    </div>
  );
}

export default App;
