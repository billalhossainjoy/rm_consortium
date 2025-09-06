import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Award, Users, Zap, Globe } from "lucide-react"

export function WhyChooseSection() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 15 years of successful project delivery across Bangladesh.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to meeting deadlines without compromising on quality.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure exceptional results.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with extensive architectural expertise.",
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Cutting-edge technology and modern architectural solutions.",
    },
    {
      icon: Globe,
      title: "Comprehensive Service",
      description: "End-to-end solutions from design to installation and maintenance.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-foreground">
            Why Choose RM Consortium?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver architectural solutions that exceed
            expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-0 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-space-grotesk font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
