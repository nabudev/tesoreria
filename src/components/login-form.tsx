"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
  const router = useRouter()
  const [entity, setEntity] = useState("")

  const handleLogin = () => {
    router.push("/saldos")
  }



  return (
    <div className="min-h-screen bg-[#1E88E5]">
      {/* Header */}
      <header className="p-4 flex items-center gap-3">
        <Image src="/img/usuario.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
        <h1 className="text-white text-xl font-medium">Asociación Argentina de Empleados de la Marina Mercante</h1>
      </header>

      {/* Main Content */}
      <main className="flex justify-center px-4 pt-8">
        <div className="w-full max-w-md">
          <h2 className="text-white text-center text-2xl mb-6">Acceso al Sistema</h2>

          {/* Login Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            {/* User Avatar */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <Image
                  src="/img/usuario.jpg"
                  alt="User Icon"
                  width={64}
                  height={64}
                  className="opacity-70"
                />
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <Select value={entity} onValueChange={setEntity}>
                <SelectTrigger className="w-full h-10 border rounded">
                  <SelectValue placeholder="Entidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tesoreria">Tesoreria</SelectItem>
                  <SelectItem value="empresas">Empresas</SelectItem>
                  <SelectItem value="afiliados">Afiliados</SelectItem>
                </SelectContent>
              </Select>

              <Input type="text" placeholder="Usuario" className="h-10" />

              <Input type="password" placeholder="Contraseña" className="h-10" />

              <Button className="w-full bg-[#1E88E5] hover:bg-[#1976D2]" onClick={handleLogin} disabled={!entity}>
            Acceder
          </Button>

              <div className="text-center">
                <Link href="/forgot-password" className="text-[#1E88E5] text-sm hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

