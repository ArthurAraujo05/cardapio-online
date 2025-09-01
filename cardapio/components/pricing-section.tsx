"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "5 Refeições",
      price: "R$ 94,50",
      pricePerMeal: "R$ 18,90 cada",
      popular: false,
    },
    {
      name: "10 Refeições",
      price: "R$ 149,90",
      pricePerMeal: "R$ 14,90 cada",
      popular: true,
    },
    {
      name: "20 Refeições",
      price: "R$ 249,90",
      pricePerMeal: "R$ 12,49 cada",
      popular: false,
    },
    {
      name: "30 Refeições",
      price: "R$ 349,90",
      pricePerMeal: "R$ 11,66 cada",
      popular: false,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="planos" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Planos de Refeições</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Escolha o plano ideal para você. Quanto mais refeições, maior a economia!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card hover:shadow-lg transition-all ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-card-foreground mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                <div className="text-sm text-muted-foreground">{plan.pricePerMeal}</div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-card-foreground">Refeições de 300-350g</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-card-foreground">Temperos caseiros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-card-foreground">Marmita 500ml</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-card-foreground">Cardápio variado</span>
                  </div>
                </div>

                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
