'use client'

import React from 'react';
import image1 from "../assets/Casment/image1.jpg"
import image2 from "../assets/Casment/image2.jpg"
import Image from "next/image";


const CasmentImage = () => {
    return <div className={"flex gap-3 container mx-auto flex-wrap p-5 "}>
            <Image src={image1} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            <Image src={image2} alt={"image"} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
        </div>
}

export default CasmentImage