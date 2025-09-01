import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dice1 as Rice, Beef, Fish, Salad, Utensils, Cookie } from "lucide-react"

export function MenuSection() {
  const menuCategories = [
    {
      title: "Arroz",
      icon: Rice,
      items: [
        "Arroz branco",
        "Arroz branco com cenoura",
        "Arroz carreteiro",
        "Arroz integral",
        "Arroz integral com cenoura",
      ],
    },
    {
      title: "Feijão",
      icon: Cookie,
      items: ["Feijão carioca", "Feijão carioca com calabresa"],
    },
    {
      title: "Legumes e Vegetais",
      icon: Salad,
      items: [
        "Cenoura",
        "Beterraba",
        "Vagem",
        "Mandioquinha",
        "Mandioca",
        "Batata doce",
        "Batata",
        "Brócolis",
        "Abóbora cambotia",
        "Quiabo",
        "Pimentões (amarelo e vermelho)",
      ],
    },
    {
      title: "Purês",
      icon: Utensils,
      items: [
        "Purê de abóbora cambotia",
        "Purê de mandioca",
        "Purê de mandioquinha",
        "Purê de batata doce",
        "Purê de batata",
      ],
    },
    {
      title: "Carnes Bovinas",
      icon: Beef,
      items: ["Carne de panela desfiada", "Carne moída", "Carne em tiras acebolado", "Bife à role com purê de batata"],
    },
    {
      title: "Frangos",
      icon: Beef,
      items: [
        "Frango desfiado",
        "Filé de frango grelhado",
        "Filé de frango grelhado com creme de milho",
        "Frango em tiras acebolado",
        "Sobrecoxa assada com batata",
        "Fricassê de frango",
      ],
    },
    {
      title: "Peixes",
      icon: Fish,
      items: ["Peixe grelhado (tilápia)"],
    },
    {
      title: "Suínos",
      icon: Beef,
      items: ["Lombo suíno grelhado", "Lombo suíno em tiras acebolado", "Pernil desfiado"],
    },
    {
      title: "Massas",
      icon: Utensils,
      items: [
        "Panquecas (frango, carne, presunto e queijo, queijo)",
        "Talharins (Alho/óleo/bacon, Alho/óleo/brócolis, Alho/óleo/bacon/brócolis, Molho à bolonhesa, Molho à bolonhesa com almôndegas)",
        "Lasanhas (carne, frango, presunto e queijo)",
      ],
    },
    {
      title: "Pratos Especiais",
      icon: Utensils,
      items: ["Strogonoff de carne", "Strogonoff de frango"],
    },
    {
      title: "Escondidinhos",
      icon: Utensils,
      items: [
        "Escondidinho de abóbora (carne seca, carne moída ou frango desfiado)",
        "Escondidinho de mandioca (carne seca, carne moída ou frango desfiado)",
        "Escondidinho de batata c/ mandioquinha (carne seca, carne moída ou frango desfiado)",
        "Escondidinho de batata doce (carne seca, carne moída ou frango desfiado)",
      ],
    },
    {
      title: "Saladas Adicionais",
      icon: Salad,
      items: [
        "Cenoura ralada - R$3,50",
        "Beterraba ralada - R$3,50",
        "Pepino - R$3,50",
        "Tomate cereja - R$3,50",
        "Alface - R$3,50",
      ],
    },
  ]

  return (
    <section id="cardapio" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Nosso Cardápio Completo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl text-card-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-card-foreground leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
