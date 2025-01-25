"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ExpenseFilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExpenseFilterModal({ isOpen, onClose }: ExpenseFilterModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>FILTRO GASTOS</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="N° Gasto" />

          <div className="grid grid-cols-2 gap-4">
            <Input type="date" placeholder="Desde" />
            <Input type="date" placeholder="Hasta" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Cuenta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fondo-fijo">Fondo Fijo</SelectItem>
                <SelectItem value="pagadora">Pagadora</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="servicios">Servicios</SelectItem>
                <SelectItem value="viaticos">Viáticos</SelectItem>
                <SelectItem value="combustible">Combustible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Originario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aaemm">Aaemm</SelectItem>
                <SelectItem value="indarte">Indarte</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Proveedor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aysa">Aysa</SelectItem>
                <SelectItem value="ypf">YPF</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pendiente">Pendiente</SelectItem>
                <SelectItem value="cerrado">Cerrado</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="$" />
          </div>

          <Button className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white">BUSCAR</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

