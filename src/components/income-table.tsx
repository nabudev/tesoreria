"use client"

interface IncomeTableProps {
  onRowClick: (income: any) => void
}

export function IncomeTable({ onRowClick }: IncomeTableProps) {
  const data = [
    {
      fecha: "09/01/2025",
      empresa: "El Hauar",
      periodo: "Ene - 2025",
      importe: "$1.000.000",
      origen: "Transf",
    },
    {
      fecha: "09/01/2025",
      empresa: "Nautica Bigua",
      periodo: "Dic - 2024",
      importe: "$547.548",
      origen: "Pag. Fac",
    },
    {
      fecha: "09/01/2025",
      empresa: "Osernm",
      periodo: "-----",
      importe: "$175.086,96",
      origen: "Cheque",
    },
    {
      fecha: "10/01/2025",
      empresa: "Yoppolo y Cachiareli",
      periodo: "May - 2024",
      importe: "$254.698,05",
      origen: "Caja",
    },
    {
      fecha: "10/01/2025",
      empresa: "Huxley",
      periodo: "Nov - 2024",
      importe: "$10.000",
      origen: "Transf",
    },
  ]

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">FECHA</th>
            <th className="px-4 py-2 text-left">EMPRESA/CUIT</th>
            <th className="px-4 py-2 text-left">PERIODO</th>
            <th className="px-4 py-2 text-left">IMPORTE</th>
            <th className="px-4 py-2 text-left">ORIGEN</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer"
              onClick={() => onRowClick(row)}
            >
              <td className="px-4 py-2">{row.fecha}</td>
              <td className="px-4 py-2">{row.empresa}</td>
              <td className="px-4 py-2">{row.periodo}</td>
              <td className="px-4 py-2">{row.importe}</td>
              <td className="px-4 py-2">{row.origen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

