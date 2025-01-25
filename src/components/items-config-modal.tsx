"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ItemsConfigModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Item {
  fecha: string
  nombre: string
}

export function ItemsConfigModal({ isOpen, onClose }: ItemsConfigModalProps) {
  const [items, setItems] = useState<Item[]>([
    { fecha: "01/01/25", nombre: "COMBUSTIBLE" },
    { fecha: "01/01/25", nombre: "VIATICOS" },
    { fecha: "01/01/25", nombre: "SERVICIOS" },
  ])

  const [newItemName, setNewItemName] = useState("")

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = {
        fecha: new Date().toLocaleDateString("es", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }),
        nombre: newItemName.trim(),
      }
      setItems([...items, newItem])
      setNewItemName("")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>LISTA DE ITEMS</DialogTitle>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Item" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="categoria">Categoría</SelectItem>
                <SelectItem value="originario">Originario</SelectItem>
                <SelectItem value="proveedor">Proveedor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-pink-50 rounded-lg">
            <div className="grid grid-cols-[1fr,auto] p-2 bg-pink-100">
              <div className="grid grid-cols-2">
                <div className="font-medium">FECHA</div>
                <div className="font-medium">NOMBRE</div>
              </div>
              <div className="w-8"></div>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr,auto] p-2 border-t border-pink-100">
                  <div className="grid grid-cols-2">
                    <div>{item.fecha}</div>
                    <div>{item.nombre}</div>
                  </div>
                  <Button size="sm" className="w-6 h-6 p-0 bg-pink-100 hover:bg-pink-200" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="font-medium">Nuevo Item</div>
            <Input
              placeholder="Nombre"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddItem} className="bg-[#1E88E5] hover:bg-[#1976D2] text-white">
              AGREGAR
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

