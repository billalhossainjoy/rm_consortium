"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ChevronDown, Menu, X} from "lucide-react"
import Image from "next/image";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/products-services", label: "Our Products & Services" },
        {
            label: "Our Projects",
            dropdown: [
                {
                    label: "Residential",
                    submenu: [
                        { href: "/projects/residential/ongoing", label: "Ongoing" },
                        { href: "/projects/residential/completed", label: "Completed" },
                    ],
                },
                {
                    label: "Commercial",
                    submenu: [
                        { href: "/projects/commercial/ongoing", label: "Ongoing" },
                        { href: "/projects/commercial/completed", label: "Completed" },
                    ],
                },
            ],
        },
        { href: "/contact", label: "Contact Us" },
    ]

    const handleDropdownToggle = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label)
    }

    return (
        <nav className="bg-background border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="overflow-hidden">
                            <Image src={"/logo.png"} alt={"brand"} width={100} height={100}/>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative group">
                                {item.href ? (
                                    <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <div>
                                        <button
                                            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                                            onMouseEnter={() => setActiveDropdown(item.label)}
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown className="h-4 w-4" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeDropdown === item.label && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50"
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                {item.dropdown?.map((dropdownItem) => (
                                                    <div key={dropdownItem.label} className="relative group/submenu">
                                                        <div className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer">
                                                            <span>{dropdownItem.label}</span>
                                                            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                                                        </div>

                                                        {/* Submenu */}
                                                        <div className="absolute left-full top-0 ml-1 w-32 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                                            {dropdownItem.submenu?.map((subItem) => (
                                                                <Link
                                                                    key={subItem.href}
                                                                    href={subItem.href}
                                                                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                >
                                                                    {subItem.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <div>
                                            <button
                                                className="flex items-center justify-between w-full px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={() => handleDropdownToggle(item.label)}
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            {activeDropdown === item.label && (
                                                <div className="pl-4 space-y-1">
                                                    {item.dropdown?.map((dropdownItem) => (
                                                        <div key={dropdownItem.label}>
                                                            <div className="px-3 py-1 text-sm font-medium text-foreground">{dropdownItem.label}</div>
                                                            <div className="pl-4 space-y-1">
                                                                {dropdownItem.submenu?.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.href}
                                                                        href={subItem.href}
                                                                        className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                                        onClick={() => {
                                                                            setIsOpen(false)
                                                                            setActiveDropdown(null)
                                                                        }}
                                                                    >
                                                                        {subItem.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
