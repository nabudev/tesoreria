"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Check {
  bank: string
  number: string
  amount: string
}

interface ManualIncomeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ManualIncomeModal({ isOpen, onClose }: ManualIncomeModalProps) {
  const [checks, setChecks] = useState<Check[]>([
    { bank: "Nación", number: "98-1254-66475", amount: "$500.0000" },
    { bank: "Nación", number: "98-1254-66475", amount: "$500.0000" },
  ])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-gray-100">
        <DialogHeader className="p-4 bg-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <DialogTitle>INGRESO MANUAL</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <Input placeholder="FECHA" className="bg-white" />
            <Input placeholder="CUIT" className="bg-white" />
            <Input placeholder="RAZÓN SOCIAL" className="bg-white" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input placeholder="$ TOTAL" className="bg-white" />
            <Input placeholder="$ EFECTIVO" className="bg-white" />
            <Input placeholder="N° RECIBO" className="bg-white" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">AGREGAR CHEQUE</h3>
              <Input placeholder="FECHA VTO" className="w-32 bg-white" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Input placeholder="BANCO" className="bg-white" />
              <Input placeholder="N° CHEQUE" className="bg-white" />
              <Input placeholder="$ CHEQUE" className="bg-white" />
            </div>
          </div>

          <div className="space-y-2">
            {checks.map((check, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-white rounded">
                <span>{check.bank}</span>
                <span>{check.number}</span>
                <span>{check.amount}</span>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
              AGREGAR
            </Button>
            <Button className="flex-1 bg-[#1E88E5] hover:bg-[#1976D2] text-white">GUARDAR INGRESO</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

