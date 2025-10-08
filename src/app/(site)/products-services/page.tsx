import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Home, Layers, Microscope, Users, Wrench } from "lucide-react"
import Link from "next/link"
import useServicesHook from "./services"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@*/components/ui/dialog"
import PreviewImages from "@components/preview-images"

export default function ProductsServicesPage() {
  const services = useServicesHook()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-sans">Our Products & Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive architectural solutions from concept to completion, delivering excellence in facade
            engineering, glass processing and building envelope systems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground mb-2 font-sans">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {service.items.length > 0 && (
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, itemIndex) => (
                        <Badge
                          key={itemIndex}
                          variant="outline"
                          className="text-xs px-3 py-1 bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                        >

                              <Dialog>
  <DialogTrigger className="cursor-pointer">{item.name}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent className="overflow-y-auto max-h-[70vh]">
        <PreviewImages images={item.images}  />
      </DialogContent>
    </DialogHeader>
  </DialogContent>
</Dialog>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
        </div>
        <Collapse title="Aluminum glass Door & window --- siliding door & wind">
          <ServiceImage />
        </Collapse>
        <div className="container mx-auto max-w-4xl text-center">
        </div>
        <Collapse title="Casment">
          <CasmentImage />
        </Collapse>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/40">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-sans">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            From initial consultation to final installation, our integrated approach ensures your architectural vision
            becomes reality with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              Get Consultation
            </Link>
            <Link
              href="/projects/residential/completed"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors inline-block"
            >
              View Our Projects
            </Link>
          </div>
        </div>
        
          
      </section>
    </main>
  )
}
