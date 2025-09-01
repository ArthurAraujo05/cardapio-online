"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById("cardapio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Cardápio de Refeições</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">Marmita 500ml</p>

        <Card className="max-w-2xl mx-auto p-6 mb-8 bg-card">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">Refeições de 300 a 350g</h2>
          <p className="text-card-foreground mb-4">Preparadas com temperos caseiros de qualidade</p>
          <div className="text-sm text-muted-foreground">
            <strong>Temperos utilizados:</strong> sal, cebola, alho, cheiro verde, pimentões, chimichurri, pimenta do
            reino
          </div>
        </Card>

        <Button
          onClick={scrollToMenu}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
        >
          Ver Cardápio Completo
        </Button>
      </div>
    </section>
  )
}
