import { Building, Building2, Wallet, BanknoteIcon as BanknotesIcon } from "lucide-react"

export function BalanceCards() {
  const cards = [
    {
      title: "RECAUDADORA",
      amount: "$117,233,894.56",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-white",
    },
    {
      title: "PAGADORA",
      amount: "$64,392,452.62",
      icon: <Building className="w-8 h-8" />,
      color: "bg-pink-100",
    },
    {
      title: "CAJA",
      amount: "$505,000",
      icon: <Wallet className="w-8 h-8" />,
      color: "bg-orange-100",
    },
    {
      title: "FONDO FIJO",
      amount: "$151,000",
      icon: <BanknotesIcon className="w-8 h-8" />,
      color: "bg-yellow-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div key={card.title} className={`${card.color} rounded-lg p-4 flex items-center gap-4`}>
          <div className="p-2 bg-white/50 rounded-lg">{card.icon}</div>
          <div>
            <h3 className="text-sm font-medium">{card.title}</h3>
            <p className="text-lg font-bold">{card.amount}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

