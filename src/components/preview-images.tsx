import Image from 'next/image'
import React from 'react'

export default function  PreviewImages(arr: never[]) {
    return <div className={"flex gap-3 container mx-auto flex-wrap p-5 "}>
        {
            arr.map((image, i) => {
                return <Image key={i} src={image} alt={image} className={"max-w-80 w-full h-80 rounded-lg border-lg border-black bg-white overflow-hidden"} />
            })
        }
        </div>
}