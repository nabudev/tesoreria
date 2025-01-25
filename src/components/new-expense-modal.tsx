"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface NewExpenseModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewExpenseModal({ isOpen, onClose }: NewExpenseModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>NUEVO GASTO</DialogTitle>
            <div className="flex items-center gap-2">
              <Input type="date" className="w-32" />
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <Input placeholder="Categoría" className="col-span-2" />
            <Input placeholder="Cuenta" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input placeholder="$" />
            <Input placeholder="Originario" className="col-span-2" />
          </div>

          <Input placeholder="Proveedor" />

          <Textarea placeholder="Observaciones" className="min-h-[100px]" />

          <Button className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white">CARGAR / ACTUALIZAR</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

