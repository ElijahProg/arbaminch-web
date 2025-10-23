import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  Truck,
  Headphones,
  CreditCard,
  FileText,
  MessageSquare,
  Sprout,
  GraduationCap,
  Wrench,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-primary-foreground/95 leading-relaxed">
              Comprehensive water solutions designed to meet the diverse needs of our residential and commercial
              customers
            </p>
          </div>
        </div>
      </section>

      {/* Water Distribution Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Water Distribution Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Reliable water supply solutions for every need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Residential Water Supply</CardTitle>
                  <CardDescription>Clean water delivered directly to your home</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">24/7 continuous water supply</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Quality-tested drinking water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Flexible payment plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">New connection services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Commercial Services</CardTitle>
                  <CardDescription>Tailored solutions for businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">High-volume water supply</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Priority maintenance support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Custom billing solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Industrial water solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Emergency Water Delivery</CardTitle>
                  <CardDescription>Water tanker services when you need them</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Same-day delivery available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Clean, sanitized tankers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Various volume options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Event and construction support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Support Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We are here to help you every step of the way</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Bill Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multiple payment options including online, mobile, and in-person payments for your convenience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Service Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Submit requests for new connections, meter readings, repairs, and other services through our portal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Complaint Resolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fast and efficient complaint handling system to address your concerns and resolve issues promptly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Headphones className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Round-the-clock customer service hotline for emergencies, inquiries, and technical support.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <Link href="/portal">Access Customer Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Building a sustainable future together</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sprout className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Water Conservation Programs</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Educational initiatives and incentive programs to promote water conservation and sustainable usage
                  practices in homes and businesses.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Rainwater harvesting workshops</li>
                  <li>Water-efficient fixture rebates</li>
                  <li>Conservation awareness campaigns</li>
                </ul>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Initiatives</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  School programs and community workshops teaching the importance of water conservation and proper water
                  management.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>School water education programs</li>
                  <li>Community awareness events</li>
                  <li>Water quality testing demonstrations</li>
                </ul>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Infrastructure Development</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ongoing projects to expand and modernize water infrastructure, ensuring reliable service for growing
                  communities.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Pipeline expansion projects</li>
                  <li>Water treatment facility upgrades</li>
                  <li>Smart meter installations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/95">
            Contact us today to learn more about our services or to request a new water connection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              asChild
            >
              <Link href="/portal">Customer Portal</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
