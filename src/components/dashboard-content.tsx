"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BalanceCards } from "./balance-cards"
import { BalanceTable } from "./balance-table"
import { SearchModal } from "./search-modal"
import { NewEntryModal } from "./new-entry-modal"

export function DashboardContent() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [isNewEntryModalOpen, setIsNewEntryModalOpen] = useState(false)

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">SALDOS ACTUALES</h1>
        <Button
          variant="secondary"
          className="bg-[#ADD8E6] text-black hover:bg-[#99CCE6]"
          onClick={() => setIsSearchModalOpen(true)}
        >
          <Search className="w-4 h-4 mr-2" />
          BUSCAR
        </Button>
      </div>

      <BalanceCards />
      <BalanceTable />

      <div className="flex justify-between mt-4">
        <div className="flex gap-4">
          <Button variant="secondary">Download</Button>
          <div className="flex gap-2">
            <Input type="text" value="$20,000" className="w-24 bg-white" readOnly />
            <Input type="text" value="$50,000" className="w-24 bg-white" readOnly />
          </div>
        </div>
        <Button className="bg-[#1E1E1E] hover:bg-gray-800 text-white" onClick={() => setIsNewEntryModalOpen(true)}>
          REALIZAR ASIENTO
        </Button>
      </div>

      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />

      <NewEntryModal isOpen={isNewEntryModalOpen} onClose={() => setIsNewEntryModalOpen(false)} />
    </div>
  )
}

