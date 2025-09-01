"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react"

export function ContactSection() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5519989246086"
    const message = "Olá! Gostaria de fazer um pedido de marmitas."
    const whatsappUrl = `https://wa.me/${19989246086}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Faça Seu Pedido</h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground mb-4">Entre em Contato Conosco</CardTitle>
              <p className="text-muted-foreground">Estamos prontos para atender você! Faça seu pedido pelo WhatsApp.</p>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 mb-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Peça Agora pelo WhatsApp!
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground">(19) 98924-6086</p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">Horário</h3>
                <p className="text-sm text-muted-foreground">
                  Seg - Sex: 8h às 18h
                  <br />
                  Sáb: 8h às 14h
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">Entrega</h3>
                <p className="text-sm text-muted-foreground">
                  Região metropolitana
                  <br />
                  Consulte disponibilidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
