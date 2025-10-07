import { Building2, Home, Layers, Microscope, Users, Wrench } from 'lucide-react'
import React, { useMemo } from 'react'
import images from './images'

export default function useServicesHook() {
    return useMemo(() => [
        {
            icon: <Home className="h-8 w-8" />,
            title: "Aluminum Glass Doors & Windows",
            description: "High-performance systems (Thermal & Non-Thermal Break) using both imported and local profiles",
            items: [
                {
                    name: "Sliding Door & Window",
                    images: [images[0], images[1], images[5],  images[18],]
                },
                {
                    name: "Casement Window",
                    images: [ images[2], images[3], images[4],]
                },
                {
                    name: "Tilt & Turn",
                    images: [images[7], images[8], images[9],]
                },
                {
                    name: "Swing Door",
                    images: [ images[3], images[4], images[10], images[11], images[12],]
                },
                {
                    name: "Lift & Slide",
                    images: [ images[13], images[14], images[15], images[16], ]
                },
                {
                    name: "Bi-fold Door",
                    images: [ images[19], images[20], images[21]]
                },
                {
                    name: "Automatic Sensor Sliding Door",
                    images: [images[6], images[17],]
                },
            ],
        },
        {
            icon: <Building2 className="h-8 w-8" />,
            title: "facade Works",
            description: "Engineering sophisticated building envelopes with precision",
            items: [
                {
                    name: "Curtain Wall Systems (Stick, Semi-Unitized, Unitized)",
                    images: [ images[4], images[10],]
                },
                {
                    name: "Spider Glazing (Point Fixing)",
                    images: []
                },
                {
                    name: "Skylights",
                    images: []
                },
                {
                    name: "Louvers: Box, Z, Glass, Hydrofoil, Aerofoil & Customized",
                    images: []
                },
            ],
        },
        {
            icon: <Layers className="h-8 w-8" />,
            title: "Cladding Solutions",
            description: "Transforming exteriors with premium materials",
            items: [
                {
                    name: "ACP (Aluminum Composite Panel) Cladding",
                    image: []
                },
                {
                    name: "Zinc Cladding",
                    image: []
                },
                {
                    name: "Stone Cladding",
                    image: []
                },
                {
                    name: "Perforated Cladding",
                    image: []
                },
            ],
        },
        {
            icon: <Wrench className="h-8 w-8" />,
            title: "Interior & Architectural Glass",
            description: "Enhancing spaces with precision-crafted glasswork",
            items: [
                {
                    name: "Glass Partitions",
                    image: []
                },
                {
                    name: "Shower Enclosures",
                    image: []
                },
            ],
        },
        {
            icon: <Microscope className="h-8 w-8" />,
            title: "Advanced Glass Processing",
            description: "Delivering specialized products through our in-house facility (Dhaka Tempered Glass)",
            items: [
                {
                    name: "Double Glazing Units (DGU)",
                    image: []
                },
                {
                    name: "Tempered Glass",
                    image: []
                },
                {
                    name: "Laminated Glass",
                    image: []
                },
                {
                    name: "Bent Glass",
                    image: []
                },
            ],
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "facade Engineering & Consultancy",
            description:
                "Providing expert guidance to ensure your design is efficient, durable and aesthetically exceptional",
            items: [],
        },
    ], [])
}
