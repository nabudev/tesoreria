"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>FILTRO MOVIMIENTOS</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm">Desde</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Hasta</label>
              <Input type="date" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Cuenta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cuenta1">Cuenta 1</SelectItem>
                <SelectItem value="cuenta2">Cuenta 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cat1">Categoría 1</SelectItem>
                <SelectItem value="cat2">Categoría 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Originario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="orig1">Originario 1</SelectItem>
                <SelectItem value="orig2">Originario 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Proveedor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prov1">Proveedor 1</SelectItem>
                <SelectItem value="prov2">Proveedor 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="N° Movimiento" />
            <Input placeholder="$" />
          </div>

          <Button className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white">BUSCAR</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

