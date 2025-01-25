"use client"

import { Button } from "@/components/ui/button"

interface Expense {
  id: number
  cuenta: string
  fecha: string
  categoria: string
  importe: string
  originario: string
  proveedor: string
  estado: "Cerrado" | "Pendiente"
}

interface ExpensesTableProps {
  onNewExpense: () => void
}

export function ExpensesTable({ onNewExpense }: ExpensesTableProps) {
  const expenses: Expense[] = [
    {
      id: 6,
      cuenta: "Fondo Fijo",
      fecha: "10/01/2025",
      categoria: "SERVICIOS",
      importe: "$2500",
      originario: "Aaemm",
      proveedor: "Aysa",
      estado: "Cerrado",
    },
    {
      id: 5,
      cuenta: "Fondo Fijo",
      fecha: "09/01/2025",
      categoria: "FRANQUEO",
      importe: "$100",
      originario: "Aaemm",
      proveedor: "Correo Arg",
      estado: "Pendiente",
    },
    {
      id: 4,
      cuenta: "Pagadora",
      fecha: "08/01/2025",
      categoria: "EQUIPOS",
      importe: "$8.000",
      originario: "Aaemm",
      proveedor: "Fravega",
      estado: "Cerrado",
    },
    {
      id: 3,
      cuenta: "Pagadora",
      fecha: "08/01/2025",
      categoria: "VIATICOS",
      importe: "$2.500",
      originario: "Indarte",
      proveedor: "Rendición",
      estado: "Cerrado",
    },
    {
      id: 2,
      cuenta: "Fondo Fijo",
      fecha: "08/01/2025",
      categoria: "COMBUSTIBLE",
      importe: "$400",
      originario: "Flores",
      proveedor: "Ypf",
      estado: "Pendiente",
    },
    {
      id: 1,
      cuenta: "Pagadora",
      fecha: "08/01/2025",
      categoria: "EQUIPOS",
      importe: "$500",
      originario: "Aaemm",
      proveedor: "Fravega",
      estado: "Cerrado",
    },
  ]

  const total = expenses.reduce((sum, expense) => {
    const amount = Number.parseFloat(expense.importe.replace("$", "").replace(",", ""))
    return sum + amount
  }, 0)

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">N°</th>
              <th className="px-4 py-2 text-left">CUENTA</th>
              <th className="px-4 py-2 text-left">FECHA</th>
              <th className="px-4 py-2 text-left">CATEGORIA</th>
              <th className="px-4 py-2 text-left">IMPORTE</th>
              <th className="px-4 py-2 text-left">ORIGINARIO</th>
              <th className="px-4 py-2 text-left">PROVEEDOR</th>
              <th className="px-4 py-2 text-left">ESTADO</th>
              <th className="px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{expense.id}</td>
                <td className="px-4 py-2">{expense.cuenta}</td>
                <td className="px-4 py-2">{expense.fecha}</td>
                <td className="px-4 py-2">{expense.categoria}</td>
                <td className="px-4 py-2">{expense.importe}</td>
                <td className="px-4 py-2">{expense.originario}</td>
                <td className="px-4 py-2">{expense.proveedor}</td>
                <td className="px-4 py-2">
                  <span className={expense.estado === "Pendiente" ? "text-red-500" : "text-blue-500"}>
                    {expense.estado}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Button size="sm" className="w-6 h-6 p-0 bg-pink-100 hover:bg-pink-200" />
                    <Button size="sm" className="w-6 h-6 p-0 bg-blue-100 hover:bg-blue-200" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center p-4 border-t">
        <div className="bg-gray-100 px-4 py-2 rounded">
          <span className="font-medium">TOTAL: </span>
          <span>${total.toLocaleString()}</span>
        </div>
        <Button className="bg-black hover:bg-gray-800 text-white" onClick={onNewExpense}>
          REALIZAR GASTO
        </Button>
      </div>
    </div>
  )
}

