import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {ArrowRight, Award, Building2, Calendar, Users} from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2008",
      title: "R.M. Glass Interior & Furniture",
      description:
        "Our journey began with premium interior design and high-quality glass works, establishing our foundation in precision and craftsmanship.",
    },
    {
      year: "2014",
      title: "Aeon Glass & Interior",
      description:
        "Expanded into retail with top-grade aluminum and glass products, deepening our understanding of industry dynamics and supply chains.",
    },
    {
      year: "2018",
      title: "RM Consortium Limited (RMC)",
      description:
        "Focused exclusively on complex façade projects including curtain walls, aluminum doors and windows, and ACP cladding solutions.",
    },
    {
      year: "2021",
      title: "Dhaka Tempered Glass",
      description:
        "Launched our state-of-the-art glass processing facility offering DGU, tempering, lamination, and bending services.",
    },
  ]

  const values = [
    {
      icon: Building2,
      title: "Integrated Solutions",
      description: "Complete façade and glass solution pipeline from a single, trusted source.",
    },
    {
      icon: Award,
      title: "Unmatched Precision",
      description: "Delivering with precision, durability, and aesthetic value that exceeds expectations.",
    },
    {
      icon: Users,
      title: "Trusted Partnership",
      description: "Earning trust of leading architects, contractors, and clients across Bangladesh.",
    },
  ]

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="font-space-grotesk font-bold text-4xl lg:text-6xl text-foreground leading-tight">
                Pioneering Architectural Excellence <span className="text-primary">Since 2008</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We deliver world-class façade, glass, and cladding solutions — all under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-space-grotesk font-bold text-2xl text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-space-grotesk font-bold text-2xl text-foreground">4</div>
                <div className="text-sm text-muted-foreground">Strategic Milestones</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-space-grotesk font-bold text-2xl text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Integrated Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                A journey of strategic evolution, driven by unwavering commitment to quality, innovation, and integrated
                architectural solutions.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At RM Consortium Limited (RMC), we don&apos;t just build façades — we craft iconic structures that inspire
                confidence and stand the test of time. Our story is one of strategic evolution, driven by an unwavering
                commitment to quality, innovation, and the ambition to provide truly integrated architectural solutions
                in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Four strategic milestones that shaped our evolution into Bangladesh&apos;s premier façade solutions provider.
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-space-grotesk font-bold text-primary text-lg">{milestone.year}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-space-grotesk font-bold text-xl text-foreground">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Today, RM Consortium Limited is more than a service provider. We are a powerhouse of expertise,
              technology, and craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-4">
                We are your partner in building the future.
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                From concept to completion, we offer comprehensive solutions from a single, trusted source.
              </p>
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
