import Link from "next/link"
import {Building2, Mail, MapPin, Phone} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-space-grotesk font-bold text-xl">RM Consortium</span>
            </div>
            <p className="text-sm text-background/80">
              Leading architectural firm specializing in façade, glass, and cladding solutions since 2008.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-space-grotesk font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/services" className="hover:text-background transition-colors">
                  Aluminum Doors & Windows
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors">
                  Façade Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors">
                  Cladding Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors">
                  Interior Glass
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-space-grotesk font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/src/app/(site)/projects" className="hover:text-background transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-space-grotesk font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@rmconsortium.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 RM Consortium Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
