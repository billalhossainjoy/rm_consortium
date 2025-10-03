import {Badge} from "@components/ui/badge"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@components/ui/card"
import {Building, Calendar, MapPin, Users} from "lucide-react"
import Image from "next/image";

export default function CommercialOngoingPage() {
  const ongoingProjects = [
    {
      id: 1,
      title: "Corporate Headquarters - Motijheel",
      description:
        "Modern 25-story office tower featuring advanced curtain wall systems and energy-efficient glazing solutions.",
      location: "Motijheel, Dhaka",
      date: "January 2026",
      image: "/corporate-hq-motijheel.png",
    },
      {
      id: 1,
      title: "Corporate Headquarters - Motijheel",
      description:
        "Modern 25-story office tower featuring advanced curtain wall systems and energy-efficient glazing solutions.",
      location: "Motijheel, Dhaka",
      expectedCompletion: "January 2026",
      image: "/corporate-hq-motijheel.png",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Commercial Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ongoing Commercial Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our current commercial developments featuring innovative facade solutions and cutting-edge
              architectural glass systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>3 Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>650,000 sq ft Total</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2024-2026 Timeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-12 justify-center">
            {ongoingProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden max-w-3xl w-full">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="bg-primary/90">
                        Ongoing
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <div className="flex flex-col gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Expected: {project.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
