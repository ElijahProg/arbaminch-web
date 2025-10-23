import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Users, Wrench, ArrowRight, CheckCircle, Leaf } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lush-green-ethiopian-landscape-with-trees.jpg"
            alt="Lush green landscape of Arbaminch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
        </div>

        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
          <img
            src="/green-tropical-leaf.jpg"
            alt=""
            className="absolute top-10 right-10 w-32 h-32 object-cover rounded-full opacity-20 blur-sm animate-float"
          />
          <img
            src="/green-palm-leaf.jpg"
            alt=""
            className="absolute bottom-20 left-10 w-40 h-40 object-cover rounded-full opacity-15 blur-sm animate-float-delayed"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-4">
            <Leaf className="h-16 w-16 text-secondary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Clean Water from Nature's Heart</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance text-white/95">
            Arbaminch Water Supply brings you pure water from our lush green highlands, committed to sustainability and
            community wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/portal">
                Customer Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Water from Arbaminch's Green Paradise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Nestled in one of Ethiopia's most beautiful green regions, our water comes from pristine natural sources
                surrounded by lush vegetation and thriving ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="/lush-green-ethiopian-landscape-with-trees.jpg"
                  alt="Green landscape"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Pristine Highlands</p>
                </div>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="/clean-water-flowing-through-green-nature.jpg"
                  alt="Water in nature"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Natural Water Sources</p>
                </div>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="/tropical-plants-and-vegetation-ethiopia.jpg"
                  alt="Tropical vegetation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Rich Biodiversity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver safe, reliable, and sustainable water services to the people of Arbaminch, ensuring every
              household and business has access to clean water while protecting our natural resources and green
              environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We are dedicated to excellence in water service delivery and environmental stewardship
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Droplet className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Clean Water</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Quality-tested water from natural sources that meets international safety standards
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Round-the-clock customer service for all your water needs
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <Wrench className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Reliable Service</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Consistent water supply with minimal service interruptions
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Committed to environmental sustainability and protecting nature
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-muted to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive water solutions for residential and commercial customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-primary/10">
              <h3 className="text-2xl font-semibold mb-4">Water Distribution</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Residential water supply</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Commercial services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Emergency water delivery</span>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full border-primary/30 hover:bg-primary/5 bg-transparent">
                <Link href="/services">Learn More</Link>
              </Button>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-secondary/20">
              <h3 className="text-2xl font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Online bill payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Service requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Complaint resolution</span>
                </li>
              </ul>
              <Button
                variant="outline"
                asChild
                className="w-full border-secondary/30 hover:bg-secondary/10 bg-transparent"
              >
                <Link href="/portal">Customer Portal</Link>
              </Button>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-accent/20">
              <h3 className="text-2xl font-semibold mb-4">Community Projects</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Water conservation programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Educational initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Infrastructure development</span>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full border-accent/30 hover:bg-accent/10 bg-transparent">
                <Link href="/services">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-secondary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/tropical-plants-and-vegetation-ethiopia.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Leaf className="h-12 w-12 mx-auto mb-4 text-secondary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Need Water Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/95">
            Get in touch with us today for new connections, service requests, or any inquiries
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-secondary hover:bg-secondary/90 shadow-lg">
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
