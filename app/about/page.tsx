import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Eye, Users2, Droplet, TrendingUp, Quote } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Arbaminch Water Supply</h1>
            <p className="text-xl text-primary-foreground/95 leading-relaxed">
              Serving our community with dedication, integrity, and a commitment to sustainable water management since
              1995
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* President Photo */}
                  <div className="md:col-span-2 relative h-64 md:h-auto bg-gradient-to-br from-secondary/20 to-primary/20">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-xl">
                        <Image
                          src="/professional-ethiopian-business-leader-portrait.jpg"
                          alt="President of Arbaminch Water Supply"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* Decorative green leaves */}
                    <div className="absolute top-4 left-4 w-16 h-16 opacity-20">
                      <Image src="/green-tropical-leaf.jpg" alt="" fill className="object-contain" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-20 h-20 opacity-20">
                      <Image src="/green-palm-leaf.jpg" alt="" fill className="object-contain" />
                    </div>
                  </div>

                  {/* President Message */}
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="h-12 w-12 text-primary/20 mb-4" />
                    <h2 className="text-3xl font-bold mb-2">Message from Our President</h2>
                    <p className="text-sm text-muted-foreground mb-6">Dr. Alemayehu Tadesse, President & CEO</p>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Welcome to Arbaminch Water Supply. As we serve the beautiful green city of Arbaminch, we are
                        reminded daily of our responsibility to protect and preserve our precious water resources for
                        future generations.
                      </p>
                      <p>
                        Our commitment goes beyond simply delivering water to your homes and businesses. We are
                        dedicated to environmental stewardship, sustainable practices, and ensuring that every member of
                        our community has access to clean, safe water.
                      </p>
                      <p>
                        Together with our dedicated team and supportive community, we continue to innovate and improve
                        our services while maintaining the natural beauty that makes Arbaminch truly special.
                      </p>
                      <p className="font-semibold text-foreground pt-4">Thank you for your trust and partnership.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative">
        <div className="absolute top-20 right-10 w-32 h-32 opacity-5">
          <Image src="/green-monstera-leaf.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Arbaminch Water Supply was established in 1995 with a simple yet powerful mission: to provide every
                household and business in Arbaminch with access to clean, safe, and reliable water. What began as a
                small municipal water service has grown into a comprehensive water management organization serving over
                50,000 residents and hundreds of businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the past three decades, we have invested heavily in infrastructure development, water quality
                testing facilities, and customer service systems. Our commitment to excellence has made us a trusted
                partner in the community's growth and development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to innovate and adapt to meet the changing needs of our community while maintaining
                our core values of reliability, sustainability, and customer-first service. We are proud to be an
                integral part of Arbaminch's past, present, and future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver safe, reliable, and sustainable water services to the people of Arbaminch, ensuring
                    universal access to clean water while protecting our natural resources for future generations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-secondary/5">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg">
                    <Eye className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading water utility in Ethiopia, recognized for innovation, sustainability, and
                    exceptional customer service, setting the standard for water management excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-accent/5">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                    <Award className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrity, excellence, sustainability, innovation, and community focus guide everything we do. We
                    are committed to transparency and accountability in all our operations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Serving Green Arbaminch</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Protecting the natural beauty and water resources of our lush, green city
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/lush-green-ethiopian-landscape-with-trees.jpg"
                alt="Green Arbaminch landscape"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Lush Green Landscapes</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/clean-water-flowing-through-green-nature.jpg"
                alt="Clean water in nature"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Pure Water Sources</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/tropical-plants-and-vegetation-ethiopia.jpg"
                alt="Tropical vegetation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Rich Biodiversity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Matter */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Water Matters</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Clean water is the foundation of healthy communities and sustainable development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <Droplet className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Public Health</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Access to clean water prevents waterborne diseases and improves overall community health. Our
                      rigorous testing ensures water safety for all residents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Economic Growth</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reliable water infrastructure supports businesses, agriculture, and industry, driving economic
                      development and creating opportunities for our community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                      <Users2 className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Social Equity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe everyone deserves access to clean water. Our programs ensure affordable water services
                      reach all members of our community, regardless of economic status.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Environmental Stewardship</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sustainable water management protects our natural resources. We implement conservation programs
                      and modern technologies to minimize environmental impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/90">Residents Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/90">Business Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.8%</div>
              <div className="text-primary-foreground/90">Service Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">29+</div>
              <div className="text-primary-foreground/90">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Dedicated professionals working around the clock to serve you
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-center">
              Our team consists of over 150 skilled professionals including engineers, technicians, customer service
              representatives, and administrative staff. Each member is committed to maintaining the highest standards
              of service delivery and ensuring that every customer receives the support they need. We invest in
              continuous training and development to keep our team at the forefront of water management technology and
              best practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
