"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface CompaniesListModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CompaniesListModal({ isOpen, onClose }: CompaniesListModalProps) {
  const companies = [
    { cuit: "30-50674228-1", name: "El Hauar" },
    { cuit: "30-50674228-1", name: "Nautica Bigua" },
    { cuit: "30-50674228-1", name: "Osernm" },
    { cuit: "30-50674228-1", name: "Yoppolo y Cachiareli" },
    { cuit: "30-50674228-1", name: "Huxley" },
    { cuit: "30-50674228-1", name: "El Hauar" },
    { cuit: "30-50674228-1", name: "Nautica Bigua" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-gray-100">
        <DialogHeader className="p-4 bg-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <DialogTitle>LISTA DE EMPRESAS / DEUDAS</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-4">
          <div className="bg-pink-50 rounded-lg mb-4">
            <div className="grid grid-cols-2 p-2 border-b bg-pink-100">
              <div className="font-medium">CUIT</div>
              <div className="font-medium">EMPRESA</div>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {companies.map((company, index) => (
                <div key={index} className="grid grid-cols-2 p-2 hover:bg-pink-100 cursor-pointer">
                  <div>{company.cuit}</div>
                  <div>{company.name}</div>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white">DESCARGAR</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

