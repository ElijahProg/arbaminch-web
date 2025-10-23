"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function ComplaintForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Complaint Submitted",
        description: "Your complaint has been registered. Our team will investigate and respond within 48 hours.",
      })
      setIsSubmitting(false)
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="complaintName">Full Name</Label>
          <Input id="complaintName" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="complaintPhone">Phone Number</Label>
          <Input id="complaintPhone" type="tel" placeholder="+251-XX-XXX-XXXX" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="complaintEmail">Email Address</Label>
        <Input id="complaintEmail" type="email" placeholder="your.email@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="accountNum">Account Number (Optional)</Label>
        <Input id="accountNum" placeholder="Enter your account number if applicable" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="complaintCategory">Complaint Category</Label>
        <Select required>
          <SelectTrigger id="complaintCategory">
            <SelectValue placeholder="Select complaint category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="water-quality">Water Quality Issue</SelectItem>
            <SelectItem value="no-supply">No Water Supply</SelectItem>
            <SelectItem value="low-pressure">Low Water Pressure</SelectItem>
            <SelectItem value="billing">Billing Issue</SelectItem>
            <SelectItem value="leak">Water Leak</SelectItem>
            <SelectItem value="customer-service">Customer Service</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="complaintDetails">Complaint Details</Label>
        <Textarea id="complaintDetails" placeholder="Please describe your complaint in detail" rows={6} required />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Complaint"
        )}
      </Button>
    </form>
  )
}
