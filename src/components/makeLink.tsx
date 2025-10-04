"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function MakeLink({children, href, ...props}: {children: React.ReactNode,href: string, variant?:string }) {
    const router = useRouter()

    return <Button size="lg" className="group" onClick={() => router.push(href)} {...props}>
                {children}
            </Button>
}