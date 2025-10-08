import { Building2, Home, Layers, Microscope, Users, Wrench } from "lucide-react";
import React, { useMemo } from "react";
import { images } from "./images";

import { StaticImageData } from "next/image";

export type ServiceItem = {
  name: string;
  images: (string | StaticImageData)[];
};

export type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: ServiceItem[];
};

export default function useServicesHook(): Service[] {
  return useMemo(
    () => [
      {
        icon: <Home className="h-8 w-8" />,
        title: "Aluminum Glass Doors & Windows",
        description:
          "High-performance systems (Thermal & Non-Thermal Break) using both imported and local profiles",
        items: [
          {
            name: "Sliding Door & Window",
            images: [images[0], images[1], images[2], images[3]],
          },
          {
            name: "Casement Window",
            images: [images[4], images[5], images[6]],
          },
          {
            name: "Tilt & Turn",
            images: [images[7], images[8], images[9]],
          },
          {
            name: "Swing Door",
            images: [images[10], images[11], images[12], images[13], images[14]],
          },
          {
            name: "Lift & Slide",
            images: [images[15], images[16], images[17], images[18]],
          },
          {
            name: "Bi-fold Door",
            images: [images[19], images[20], images[21]],
          },
          {
            name: "Automatic Sensor Sliding Door",
            images: [images[6], images[17]],
          },
        ],
      },
      {
        icon: <Building2 className="h-8 w-8" />,
        title: "Facade Works",
        description: "Engineering sophisticated building envelopes with precision",
        items: [
          {
            name: "Curtain Wall Systems (Stick, Semi-Unitized, Unitized)",
            images: [images[22], images[23],images[24]],
          },
        //   {
        //     name: "Spider Glazing (Point Fixing)",
        //     images: [images[6], images[17]],
        //   },
        //   {
        //     name: "Skylights",
        //     images: [images[6], images[17]],
        //   },
        //   {
        //     name: "Louvers: Box, Z, Glass, Hydrofoil, Aerofoil & Customized",
        //     images: [images[6], images[17]],
        //   },
        ],
      },
      {
        icon: <Layers className="h-8 w-8" />,
        title: "Cladding Solutions",
        description: "Transforming exteriors with premium materials",
        items: [
          {
            name: "ACP (Aluminum Composite Panel) Cladding",
            images: [images[25], images[26]],
          },
          {
            name: "Zinc Cladding",
            images: [images[28], images[17]],
          },
          {
            name: "Stone Cladding",
            images: [images[27], images[28]],
          },
          {
            name: "Perforated Cladding",
            images: [images[29], images[30]],
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
            images: [images[31], images[32]],
          },
          {
            name: "Shower Enclosures",
            images: [images[33], images[34]],
          },
        ],
      },
      {
        icon: <Microscope className="h-8 w-8" />,
        title: "Advanced Glass Processing",
        description:
          "Delivering specialized products through our in-house facility (Dhaka Tempered Glass)",
        items: [
          {
            name: "Double Glazing Units (DGU)",
                 images: [images[31], images[32]],
          },
          {
            name: "Tempered Glass",
               images: [images[33], images[34]],
          },
          {
            name: "Laminated Glass",
            images: [images[35], images[36]],
          },
        //   {
        //     name: "Bent Glass",
        //     images: [images[6], images[17]],
        //   },
        ],
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: "Facade Engineering & Consultancy",
        description:
          "Providing expert guidance to ensure your design is efficient, durable and aesthetically exceptional",
        items: [],
      },
    ],
    []
  );
}
