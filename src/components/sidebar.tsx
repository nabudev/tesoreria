"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PieChart, ArrowUpCircle, ArrowDownCircle, Settings } from "lucide-react"

interface SidebarProps {
  isExpanded: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onConfigClick?: () => void
}

export function Sidebar({ isExpanded, onMouseEnter, onMouseLeave, onConfigClick }: SidebarProps) {
  const pathname = usePathname()
  return (
    <div
      className={`bg-[#1E1E1E] text-white transition-all duration-300 ${isExpanded ? "w-64" : "w-20"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-4">
        <Image
          src="/placeholder.svg?height=48&width=48"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full mx-auto"
        />
      </div>

      <nav className="mt-8">
      <MenuItem
          icon={<PieChart />}
          label="SALDOS"
          expanded={isExpanded}
          href="/saldos"
          active={pathname === "/saldos"}
        />
        <MenuItem
          icon={<ArrowUpCircle />}
          label="INGRESOS"
          expanded={isExpanded}
          href="/ingresos"
          active={pathname === "/ingresos"}
        />
        <MenuItem
          icon={<ArrowDownCircle />}
          label="GASTOS"
          expanded={isExpanded}
          href="/gastos"
          active={pathname === "/gastos"}/>
        <MenuItem icon={<Settings />} label="CONFIGURAR" expanded={isExpanded} onClick={onConfigClick} />
      </nav>
    </div>
  )
}

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  expanded: boolean
  active?: boolean
  href?: string;
  onClick?: () => void
}

function MenuItem({ icon, label, expanded, active, href, onClick }: MenuItemProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`flex items-center px-4 py-3 gap-4 hover:bg-gray-800 w-full text-left ${
          active ? "bg-gray-800" : ""
        }`}
      >
        <span className="text-xl">{icon}</span>
        <span className={`${expanded ? "opacity-100" : "opacity-0"} transition-opacity whitespace-nowrap`}>
          {label}
        </span>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-3 gap-4 hover:bg-gray-800 w-full text-left ${
        active ? "bg-gray-800" : ""
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className={`${expanded ? "opacity-100" : "opacity-0"} transition-opacity whitespace-nowrap`}>
        {label}
      </span>
    </button>
  )
}


