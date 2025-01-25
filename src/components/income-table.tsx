"use client"

interface Income {
  fecha: string;
  razonSocial: string;
  cuit: string;
  periodo: string;
  monto: string;
}

interface IncomeTableProps {
  onRowClick: (income: Income) => void
}

export function IncomeTable({ onRowClick }: IncomeTableProps) {
  const data: Income[] = [
    {
      fecha: "09/01/2025",
      razonSocial: "El Hauar",
      cuit: "30-12345678-9",
      periodo: "Ene - 2025",
      monto: "$1.000.000",
    },
    {
      fecha: "09/01/2025",
      razonSocial: "Nautica Bigua",
      cuit: "30-98765432-1",
      periodo: "Dic - 2024",
      monto: "$547.548",
    },
    {
      fecha: "09/01/2025",
      razonSocial: "Osernm",
      cuit: "30-11111111-1",
      periodo: "-----",
      monto: "$175.086,96",
    },
    {
      fecha: "10/01/2025",
      razonSocial: "Yoppolo y Cachiareli",
      cuit: "30-22222222-2",
      periodo: "May - 2024",
      monto: "$254.698,05",
    },
    {
      fecha: "10/01/2025",
      razonSocial: "Huxley",
      cuit: "30-33333333-3",
      periodo: "Nov - 2024",
      monto: "$10.000",
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
              <td className="px-4 py-2">{row.razonSocial} ({row.cuit})</td>
              <td className="px-4 py-2">{row.periodo}</td>
              <td className="px-4 py-2">{row.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}