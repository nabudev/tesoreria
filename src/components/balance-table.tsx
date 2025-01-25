export function BalanceTable() {
  const columns = [
    "N°",
    "FECHA",
    "CATEGORIA",
    "ORIGINARIO",
    "PROVEEDOR",
    "PLAZ FIJO",
    "DOL",
    "REC",
    "PAG",
    "CAJA",
    "FOND FIJO",
  ]

  const data = [
    {
      id: "s/n",
      fecha: "09/01/2025",
      categoria: "Resultado de Ejercicio",
      originario: "AAEMM",
      proveedor: "AAEMM",
      pagadora: "$1,500,700.67",
    },
    {
      id: "s/n",
      fecha: "09/01/2025",
      categoria: "Impuestos Ley 24.713",
      originario: "AAEMM",
      proveedor: "AAEMM",
      pagadora: "$253,175.00",
    },
    {
      id: "s/n",
      fecha: "09/01/2025",
      categoria: "Movimientos",
      originario: "AAEMM",
      proveedor: "AAEMM",
      caja: "$150,000",
      fondoFijo: "$150,000",
    },
    {
      id: "1",
      fecha: "10/01/2025",
      categoria: "Combustibles",
      originario: "Indarte",
      proveedor: "YPF",
      fondoFijo: "$50,000",
    },
    {
      id: "2",
      fecha: "10/01/2025",
      categoria: "movimientos",
      originario: "aaemm",
      proveedor: "banco nacion",
      plazFijo: "$20,000",
      pagadora: "$20,000",
    },
  ]

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((column) => (
                <th key={column} className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.fecha}</td>
                <td className="px-4 py-2">{row.categoria}</td>
                <td className="px-4 py-2">{row.originario}</td>
                <td className="px-4 py-2">{row.proveedor}</td>
                <td className="px-4 py-2">{row.plazFijo || "..."}</td>
                <td className="px-4 py-2">...</td>
                <td className="px-4 py-2">...</td>
                <td className="px-4 py-2">{row.pagadora || "..."}</td>
                <td className="px-4 py-2">{row.caja || "..."}</td>
                <td className="px-4 py-2">{row.fondoFijo || "..."}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

