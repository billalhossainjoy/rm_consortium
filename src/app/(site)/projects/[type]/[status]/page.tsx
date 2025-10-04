'use client'

import {Badge} from "@/components/ui/badge"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Award, Building, Calendar, MapPin, Users} from "lucide-react"
import {ApiClient} from "@providers/data-provider";
import {useParams} from "next/navigation";
import {useCustom} from "@refinedev/core";
import Projects from "@app/(site)/projects/[type]/[status]/projects";

export default function CommercialCompletedPage() {
    const {type, status} = useParams();

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
              <span className={"capitalize"}>{status}</span> <span className={"capitalize"}>{type}</span> Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our successfully delivered commercial developments that demonstrate our expertise in large-scale
              facade solutions and architectural innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>5 Completed Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
        <Projects />
    </main>
  )
}
