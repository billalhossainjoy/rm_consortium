import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function PreviewImages({images}: {images: (string | StaticImageData)[]}) {
    return <div className={"grid grid-cols-2 gap-2 p-2 rounded-lg overflow-y-auto max-h-[70vh]"}>
        {
            images.map((image, i) => {
                return <Image key={i} src={image} alt={"images"} className={"w-full h-full rounded-lg border-lg border-black bg-white overflow-hidden"} />
            })
        }
        </div>
}