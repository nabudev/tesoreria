import { Users, CircleDollarSign, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompanyStatsProps {
  onCompanyCardClick: () => void
}

export function CompanyStats({ onCompanyCardClick }: CompanyStatsProps) {
  const stats = [
    {
      title: "EMPRESAS",
      value: "340",
      icon: <Users className="w-8 h-8" />,
      color: "bg-white",
      onClick: onCompanyCardClick,
    },
    {
      title: "SIN DEUDAS",
      value: "200",
      icon: <CircleDollarSign className="w-8 h-8" />,
      color: "bg-green-100",
    },
    {
      title: "DEUDA +2 MESES",
      value: "50",
      icon: <Clock className="w-8 h-8" />,
      color: "bg-orange-100",
    },
    {
      title: "DEUDA +6 MESES",
      value: "90",
      icon: <AlertCircle className="w-8 h-8" />,
      color: "bg-red-100",
    },
  ]

  return (
    <>
      {stats.map((stat) => (
        <Button
          key={stat.title}
          variant="ghost"
          className={`${stat.color} rounded-lg p-4 flex items-center gap-4 h-auto w-full hover:opacity-90`}
          onClick={stat.onClick}
        >
          <div className="p-2 bg-white/50 rounded-lg">{stat.icon}</div>
          <div className="text-left">
            <h3 className="text-sm font-medium">{stat.title}</h3>
            <p className="text-lg font-bold">{stat.value}</p>
          </div>
        </Button>
      ))}
    </>
  )
}

