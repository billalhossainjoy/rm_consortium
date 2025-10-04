"use client"

import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function MakeLinkOutline({children, href, ...props}: {children: React.ReactNode,href: string}) {
    const router = useRouter()

    return <Button size="lg" className="group" onClick={() => router.push(href)} variant={"outline"}>
                {children}
            </Button>
}