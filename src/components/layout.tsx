"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { DashboardContent } from "../app/saldos/page"

export default function Layout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#1E88E5]">
      <Sidebar
        isExpanded={isSidebarExpanded}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
      />
      <DashboardContent />
    </div>
  )
}

