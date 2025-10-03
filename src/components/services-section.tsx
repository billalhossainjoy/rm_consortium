import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Building, Eye, Layers, Lightbulb, Users, Wrench} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Aluminum Doors & Windows",
      description: "High-quality aluminum doors and windows with superior durability and energy efficiency.",
    },
    {
      icon: Layers,
      title: "facade Works",
      description: "Complete facade solutions including design, engineering, and installation services.",
    },
    {
      icon: Wrench,
      title: "Cladding Solutions",
      description: "Advanced cladding systems for weather protection and aesthetic enhancement.",
    },
    {
      icon: Eye,
      title: "Interior Glass",
      description: "Custom interior glass solutions for modern commercial and residential spaces.",
    },
    {
      icon: Lightbulb,
      title: "Glass Processing",
      description: "State-of-the-art glass processing with cutting-edge technology and precision.",
    },
    {
      icon: Users,
      title: "Consultancy Services",
      description: "Expert architectural consultancy for complex facade and structural projects.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive architectural solutions from concept to completion, backed by years of expertise and
            innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-space-grotesk">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
