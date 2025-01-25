"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface NewEntryModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Entry {
  type: string
  description: string
  amount: number
}

export function NewEntryModal({ isOpen, onClose }: NewEntryModalProps) {
  const [entries, setEntries] = useState<Entry[]>([
    { type: "FONDO FIJO (Debe)", description: "", amount: 350 },
    { type: "A CAJA (Haber)", description: "", amount: 350 },
    { type: "RECAUDADORA (Debe)", description: "", amount: 350 },
    { type: "A RESULTADO DE EJERCICIO (Haber)", description: "", amount: 350 },
  ])

  const totalDebe = entries.reduce((sum, entry) => (entry.type.includes("Debe") ? sum + entry.amount : sum), 0)
  const totalHaber = entries.reduce((sum, entry) => (entry.type.includes("Haber") ? sum + entry.amount : sum), 0)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[600px]">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>NUEVO ASIENTO</DialogTitle>
            <Input type="date" className="w-32" defaultValue={new Date().toISOString().split("T")[0]} />
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <RadioGroup defaultValue="debe" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debe" id="debe" />
                <label htmlFor="debe">Debe</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="haber" id="haber" />
                <label htmlFor="haber">Haber</label>
              </div>
            </RadioGroup>

            <Select>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cat1">Categoría 1</SelectItem>
                <SelectItem value="cat2">Categoría 2</SelectItem>
              </SelectContent>
            </Select>

            <Input type="number" className="w-24" placeholder="$" />

            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
              AGREGAR
            </Button>
          </div>

          <div className="border rounded-md max-h-60 overflow-y-auto">
            {entries.map((entry, index) => (
              <div key={index} className="flex items-center gap-2 p-2 border-b last:border-b-0">
                <input type="radio" className="w-4 h-4" />
                <span className="flex-1">{entry.type}</span>
                <span>${entry.amount}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm">
              Debe: ${totalDebe} | Haber: ${totalHaber}
            </div>
            <Button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white">GUARDAR ASIENTO</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

