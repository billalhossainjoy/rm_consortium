"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Building2, Shield } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MakeLink from "./makeLink";
import MakeLinkOutline from "./makeLinkOutline";

const slides = [
    {
        title: <>Architectural Excellence in <span className="text-primary">Facade Solutions</span></>,
        description: "Since 2008, RM Consortium Limited has been Bangladesh's premier architectural firm, specializing in innovative facade, glass and cladding solutions for commercial projects.",
        image: "/slider3.png",
        project: { name: "Commercial Complex", location: "Dhaka, Bangladesh" }
    },
    {
        title: <>Innovative <span className="text-primary">Facade Designs</span> with Architectural Precision</>,
        description: "For over a decade, RM Consortium Limited has led Bangladesh’s architectural landscape, delivering cutting-edge glass, cladding, and facade solutions for landmark commercial developments.",
        image: "/slider2.png",
        project: { name: "Commercial Complex", location: "Dhaka, Bangladesh" }
    }
];

export function HeroSection() {
    const [index, setIndex] = useState(0);

    // auto-change every 6s
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[index];

    return (
        <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index + "-text"}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h1 className="font-space-grotesk font-bold text-4xl lg:text-6xl text-foreground leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {slide.description}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <MakeLink href="/projects/residential/completed">
                                    View Our Projects
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </MakeLink>
                                <MakeLinkOutline href="/contact">
                                    Get Consultation
                                </MakeLinkOutline>
                            </div>

                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-center"
                                >
                                    <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <div className="font-space-grotesk font-bold text-2xl text-foreground">500+</div>
                                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-center"
                                >
                                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <div className="font-space-grotesk font-bold text-2xl text-foreground">15+</div>
                                    <div className="text-sm text-muted-foreground">Years Experience</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-center"
                                >
                                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <div className="font-space-grotesk font-bold text-2xl text-foreground">100%</div>
                                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index + "-image"}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                                <Image
                                    fill
                                    src={slide.image}
                                    alt="Facade showcase"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg"
                            >
                                <div className="text-sm text-muted-foreground">Latest Project</div>
                                <div className="font-space-grotesk font-semibold text-foreground">{slide.project.name}</div>
                                <div className="text-sm text-primary">{slide.project.location}</div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}



// import {Button} from "@/components/ui/button"
// import {ArrowRight, Award, Building2, Shield} from "lucide-react"
// import Image from "next/image";
// import MakeLink from "./makeLink";

// export function HeroSection() {

//   return (
//     <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h1 className="font-space-grotesk font-bold text-4xl lg:text-6xl text-foreground leading-tight">
//                 Architectural Excellence in <span className="text-primary">Facade Solutions</span>
//               </h1>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Since 2008, RM Consortium Limited has been Bangladesh
//                   &apos;s premier architectural firm, specializing in
//                 innovative facade, glass and cladding solutions for commercial projects.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <MakeLink href="/projects/residential/completed">
//                 View Our Projects
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </MakeLink>
//               <MakeLink variant="outline" href="/contact">
//                 Get Consultation
//               </MakeLink>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-8">
//               <div className="text-center">
//                 <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
//                 <div className="font-space-grotesk font-bold text-2xl text-foreground">500+</div>
//                 <div className="text-sm text-muted-foreground">Projects Completed</div>
//               </div>
//               <div className="text-center">
//                 <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
//                 <div className="font-space-grotesk font-bold text-2xl text-foreground">15+</div>
//                 <div className="text-sm text-muted-foreground">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <Award className="h-8 w-8 text-primary mx-auto mb-2" />
//                 <div className="font-space-grotesk font-bold text-2xl text-foreground">100%</div>
//                 <div className="text-sm text-muted-foreground">Client Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
//               <Image
//                   fill
//                 src="/modern-glass-facade.png"
//                 alt="Modern glass facade building showcasing RM Consortium's work"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
//               <div className="text-sm text-muted-foreground">Latest Project</div>
//               <div className="font-space-grotesk font-semibold text-foreground">Commercial Complex</div>
//               <div className="text-sm text-primary">Dhaka, Bangladesh</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
