"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface IncomeDetailModalProps {
  isOpen: boolean
  onClose: () => void
  income?: {
    fecha: string
    razonSocial: string
    cuit: string
    periodo: string
    monto: string
  }
}

export function IncomeDetailModal({ isOpen, onClose, income }: IncomeDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-4 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">INFORME DE INGRESO</h2>
          <Input placeholder="FECHA" className="w-32 bg-gray-100" value={income?.fecha} />
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="RAZÓN SOCIAL" className="bg-gray-100" value={income?.razonSocial} />
            <Input placeholder="CUIT" className="bg-gray-100" value={income?.cuit} />
          </div>
          <Input value="$500.000" className="w-full bg-gray-100" readOnly />
          <div className="w-full h-8 bg-green-400 rounded flex items-center justify-center text-white">ACTUALIZAR</div>

          <div className="mt-4">
            <h3 className="font-medium mb-2">EXPLOTAR INGRESO</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm font-medium">Periodo</div>
              <div className="text-sm font-medium">Importe</div>
            </div>
            <div className="max-h-[200px] overflow-y-auto space-y-2 pr-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="grid grid-cols-2 gap-2">
                  <Input defaultValue="Enero-2025" className="bg-gray-100" />
                  <Input placeholder="$" className="bg-gray-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <div className="grid grid-cols-2 gap-2">
              <Button className="w-full bg-red-300 hover:bg-red-400 text-black">REHACER</Button>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">AGREGAR</Button>
            </div>
            <Button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black">EXPLOTAR</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

