import { ChefHat, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-card-foreground">Marmitas Caseiras</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>para você</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Marmitas Caseiras. Todos os direitos reservados.</p>
          <p className="mt-1">Refeições preparadas com carinho e ingredientes frescos.</p>
        </div>
      </div>
    </footer>
  )
}
