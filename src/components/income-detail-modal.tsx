"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Income {
  fecha: string;
  razonSocial: string;
  cuit: string;
  periodo: string;
  monto: string;
}

interface IncomeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  income: Income | null;
}

export function IncomeDetailModal({ isOpen, onClose, income }: IncomeDetailModalProps) {
  if (!income) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>INFORME DE INGRESO</DialogTitle>
            <Input type="date" className="w-32" value={income.fecha} readOnly />
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="RAZÓN SOCIAL" value={income.razonSocial} readOnly />
            <Input placeholder="CUIT" value={income.cuit} readOnly />
          </div>

          <div className="w-full bg-green-100 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full w-[45%]"></div>
          </div>

          <div>
            <h3 className="font-medium mb-2">EXPLOTAR INGRESO</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <Input defaultValue={income.periodo} />
                <Input defaultValue={income.monto} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">REHACER</Button>
              <Button className="flex-1 bg-[#1E88E5] hover:bg-[#1976D2] text-white">AGREGAR</Button>
            </div>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">EXPLOTAR</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}