"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#1E88E5]">
      <Sidebar
        isExpanded={isSidebarExpanded}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
      />
      {children}
    </div>
  )
}



