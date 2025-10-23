import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BillPaymentForm } from "@/components/portal/bill-payment-form"
import { ServiceRequestForm } from "@/components/portal/service-request-form"
import { ComplaintForm } from "@/components/portal/complaint-form"
import { CreditCard, FileText, MessageSquare } from "lucide-react"

export default function CustomerPortalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Customer Portal</h1>
            <p className="text-lg text-primary-foreground/95">
              Manage your account, pay bills, and submit requests all in one place
            </p>
          </div>
        </div>
      </section>

      {/* Portal Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="payment" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-10">
                <TabsTrigger value="payment" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Bill Payment</span>
                </TabsTrigger>
                <TabsTrigger value="service" className="gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Service Request</span>
                </TabsTrigger>
                <TabsTrigger value="complaint" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Submit Complaint</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="payment" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pay Your Water Bill</CardTitle>
                    <CardDescription>Enter your account number to view and pay your current water bill</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BillPaymentForm />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="service" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit a Service Request</CardTitle>
                    <CardDescription>
                      Request new connections, meter readings, repairs, or other services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ServiceRequestForm />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="complaint" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit a Complaint</CardTitle>
                    <CardDescription>Let us know about any issues or concerns with our service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ComplaintForm />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Phone Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Call us 24/7</p>
                  <p className="font-semibold">+251-46-881-1234</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Send us an email</p>
                  <p className="font-semibold">support@arbaminchwater.et</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Visit us in person</p>
                  <p className="font-semibold">Mon-Fri: 8AM-5PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
