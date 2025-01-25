"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface Company {
  cuit: string
  name: string
}

interface AddCompanyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddCompanyModal({ isOpen, onClose }: AddCompanyModalProps) {
  const companies: Company[] = [
    { cuit: "30-50674228-1", name: "AGENCIA MARITIMA" },
    { cuit: "30-50674228-1", name: "PESQUEROS" },
    { cuit: "30-50674228-1", name: "PUERTO RIVADAVIA" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-gray-100">
        <DialogHeader className="p-4 bg-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <DialogTitle>AGREGAR NUEVA EMPRESA</DialogTitle>
            <Input placeholder="CUIT" className="w-32 bg-white" />
          </div>
        </DialogHeader>

        <div className="p-4 space-y-4">
          <div className="bg-pink-50 rounded-lg">
            <div className="grid grid-cols-2 p-2 border-b bg-pink-100">
              <div className="font-medium">CUIT</div>
              <div className="font-medium">NOMBRE</div>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {companies.map((company, index) => (
                <div key={index} className="grid grid-cols-2 p-2 items-center hover:bg-pink-100">
                  <div>{company.cuit}</div>
                  <div className="flex items-center justify-between">
                    <span>{company.name}</span>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Input placeholder="Nombre" className="flex-1 bg-white" />
            <Button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white">AGREGAR</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

