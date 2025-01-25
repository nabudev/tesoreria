"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { ExpensesTable } from "@/components/expenses-table"
import { NewExpenseModal } from "@/components/new-expense-modal"
import { ExpenseFilterModal } from "@/components/expense-filter-modal"
import { ItemsConfigModal } from "@/components/items-config-modal"

export default function ExpensesPage() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isNewExpenseModalOpen, setIsNewExpenseModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#1E88E5]">
      <Sidebar
        isExpanded={isSidebarExpanded}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
        onConfigClick={() => setIsConfigModalOpen(true)}
      />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">REGISTROS DE GASTOS</h1>
          <div className="relative w-64">
            <Button
              variant="ghost"
              className="w-full h-10 pl-10 bg-[#ADD8E6] text-black hover:bg-[#9CC8D6] justify-start font-normal"
              onClick={() => setIsFilterModalOpen(true)}
            >
              BUSCAR
            </Button>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 w-4 h-4" />
          </div>
        </div>

        <ExpensesTable onNewExpense={() => setIsNewExpenseModalOpen(true)} />

        <NewExpenseModal isOpen={isNewExpenseModalOpen} onClose={() => setIsNewExpenseModalOpen(false)} />

        <ExpenseFilterModal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} />

        <ItemsConfigModal isOpen={isConfigModalOpen} onClose={() => setIsConfigModalOpen(false)} />
      </div>
    </div>
  )
}

