"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function IncomeFilters() {
  return (
    <div className="bg-white/90 rounded-lg p-4 w-72 h-fit">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input placeholder="Desde" className="flex-1" />
          <Input placeholder="Hasta" className="flex-1" />
        </div>

        <Input placeholder="Empresa" />

        <div className="flex gap-2">
          <Input placeholder="Periodo" className="flex-1" />
          <Input placeholder="$" className="w-20" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <Checkbox id="transferencia" />
            <label htmlFor="transferencia" className="text-sm">
              Transferencia
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="pagoFacil" />
            <label htmlFor="pagoFacil" className="text-sm">
              Pago Fácil
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cheque" />
            <label htmlFor="cheque" className="text-sm">
              Cheque
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="caja" />
            <label htmlFor="caja" className="text-sm">
              Caja
            </label>
          </div>
        </div>

        <Button className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white">BUSCAR</Button>
      </div>
    </div>
  )
}

