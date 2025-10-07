'use client'

import React from 'react';
import image1 from "../assets/services/image1.jpg"
import image2 from "../assets/services/image2.jpg"
import image3 from "../assets/services/image3.jpg"
import image4 from "../assets/services/image4.jpg"
import image5 from "../assets/services/image5.jpg"
import image6 from "../assets/services/image6.jpg"
import image7 from "../assets/services/image7.jpg"
import image8 from "../assets/services/image8.jpg"
import Image from "next/image";


const ServiceImage = () => {
    return <div className={"flex gap-3 container mx-auto flex-wrap p-5 "}>
            <Image src={image1} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image2} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image3} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image4} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image5} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image6} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image7} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image8} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
        </div>
}

export default ServiceImage