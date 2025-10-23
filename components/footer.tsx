import Link from "next/link"
import { Droplet, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplet className="h-8 w-8" />
              <span className="font-bold text-lg">Arbaminch Water Supply</span>
            </div>
            <p className="text-sm text-primary-foreground/90">
              Providing clean, reliable water to our community since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline text-primary-foreground/90">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline text-primary-foreground/90">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:underline text-primary-foreground/90">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portal" className="text-sm hover:underline text-primary-foreground/90">
                  Customer Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>Water Distribution</li>
              <li>Customer Support</li>
              <li>Bill Payment</li>
              <li>Service Requests</li>
              <li>Community Projects</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Main Street, Arbaminch, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+251-46-881-1234</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@arbaminchwater.et</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Arbaminch Water Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
