import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-primary-foreground/95 leading-relaxed">
              We are here to help. Reach out to us through any of the channels below
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Main Office</p>
                <p className="font-semibold mb-3">+251-46-881-1234</p>
                <p className="text-sm text-muted-foreground mb-2">Emergency Hotline</p>
                <p className="font-semibold">+251-46-881-9999</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">General Inquiries</p>
                <p className="font-semibold mb-3 break-all">info@arbaminchwater.et</p>
                <p className="text-sm text-muted-foreground mb-2">Customer Support</p>
                <p className="font-semibold break-all">support@arbaminchwater.et</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Main Office</p>
                <p className="font-semibold">Main Street, Near City Hall</p>
                <p className="font-semibold">Arbaminch, Ethiopia</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Monday - Friday</p>
                <p className="font-semibold mb-3">8:00 AM - 5:00 PM</p>
                <p className="text-sm text-muted-foreground mb-2">Saturday</p>
                <p className="font-semibold">9:00 AM - 1:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Find Us</h2>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d37.54827631477!3d6.038333395954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14a1f0dac39e5%3A0x3e1f0b5c5e5c5e5c!2sArba%20Minch%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arbaminch Water Supply Office Location"
                  />
                </div>
              </Card>
              <div className="mt-4 p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Directions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our office is located on Main Street, near the City Hall. If you are coming from the bus station, head
                  north on Main Street for approximately 500 meters. We are on the right side, in a blue building with
                  our logo displayed prominently.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-destructive/10 border-destructive/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="h-16 w-16 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-8 w-8 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Emergency Water Service</h3>
                  <p className="text-muted-foreground">
                    For urgent water supply issues, leaks, or emergencies, call our 24/7 emergency hotline
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-muted-foreground mb-1">Emergency Hotline</p>
                  <p className="text-2xl font-bold text-destructive">+251-46-881-9999</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
