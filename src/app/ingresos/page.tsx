"use client"

import { useState } from "react"
import { CompanyStats } from "@/components/company-stats"
import { IncomeFilters } from "@/components/income-filters"
import { IncomeTable } from "@/components/income-table"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { ManualIncomeModal } from "@/components/manual-income-modal"
import { IncomeDetailModal } from "@/components/income-detail-modal"
import { AddCompanyModal } from "@/components/add-company-modal"
import { CompaniesListModal } from "@/components/companies-list-modal"

interface Income {
  fecha: string;
  razonSocial: string;
  cuit: string;
  periodo: string;
  monto: string;
}

export default function IncomePage() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isManualIncomeModalOpen, setIsManualIncomeModalOpen] = useState(false)
  const [isIncomeDetailModalOpen, setIsIncomeDetailModalOpen] = useState(false)
  const [isAddCompanyModalOpen, setIsAddCompanyModalOpen] = useState(false)
  const [isCompaniesListModalOpen, setIsCompaniesListModalOpen] = useState(false)
  const [selectedIncome, setSelectedIncome] = useState<Income | null>(null)

  const handleRowClick = (income: Income) => {
    setSelectedIncome(income)
    setIsIncomeDetailModalOpen(true)
  }

  const handleConfigClick = () => {
    setIsAddCompanyModalOpen(true)
  }

  return (
    <div className="flex min-h-screen bg-[#1E88E5]">
      <Sidebar
        isExpanded={isSidebarExpanded}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
        onConfigClick={handleConfigClick}
      />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">EMPRESAS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <CompanyStats onCompanyCardClick={() => setIsCompaniesListModalOpen(true)} />
        </div>

        <h2 className="text-xl font-bold text-white mb-4">INGRESOS</h2>

        <div className="flex gap-4">
          <IncomeFilters />
          <div className="flex-1">
            <IncomeTable onRowClick={handleRowClick} />
            <div className="flex gap-2 mt-4">
              <Button variant="secondary" className="flex-1">
                Cargar Archivos
              </Button>
              <Button variant="secondary" className="bg-green-100 hover:bg-green-200">
                Subir
              </Button>
              <Button
                variant="default"
                className="bg-black hover:bg-gray-800 text-white"
                onClick={() => setIsManualIncomeModalOpen(true)}
              >
                Ingreso Manual
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ManualIncomeModal isOpen={isManualIncomeModalOpen} onClose={() => setIsManualIncomeModalOpen(false)} />

      <IncomeDetailModal
        isOpen={isIncomeDetailModalOpen}
        onClose={() => setIsIncomeDetailModalOpen(false)}
        income={selectedIncome}
      />

      <AddCompanyModal isOpen={isAddCompanyModalOpen} onClose={() => setIsAddCompanyModalOpen(false)} />

      <CompaniesListModal isOpen={isCompaniesListModalOpen} onClose={() => setIsCompaniesListModalOpen(false)} />
    </div>
  )
}