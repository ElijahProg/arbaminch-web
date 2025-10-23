"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, Loader2 } from "lucide-react"

export function BillPaymentForm() {
  const [accountNumber, setAccountNumber] = useState("")
  const [billInfo, setBillInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handleCheckBill = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setBillInfo({
        accountNumber,
        customerName: "Sample Customer",
        currentBill: 450.0,
        dueDate: "2025-01-15",
        previousBalance: 0,
      })
      setIsLoading(false)
    }, 1000)
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Your water bill has been paid successfully.",
      })
      setIsProcessing(false)
      setBillInfo(null)
      setAccountNumber("")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleCheckBill} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="accountNumber">Account Number</Label>
          <Input
            id="accountNumber"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Checking...
            </>
          ) : (
            "Check Bill"
          )}
        </Button>
      </form>

      {billInfo && (
        <Card className="p-6 bg-muted">
          <h3 className="font-semibold text-lg mb-4">Bill Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account Number:</span>
              <span className="font-semibold">{billInfo.accountNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Customer Name:</span>
              <span className="font-semibold">{billInfo.customerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Previous Balance:</span>
              <span className="font-semibold">{billInfo.previousBalance.toFixed(2)} ETB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Current Bill:</span>
              <span className="font-semibold">{billInfo.currentBill.toFixed(2)} ETB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Due Date:</span>
              <span className="font-semibold">{billInfo.dueDate}</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between text-lg">
                <span className="font-bold">Total Amount Due:</span>
                <span className="font-bold text-primary">
                  {(billInfo.currentBill + billInfo.previousBalance).toFixed(2)} ETB
                </span>
              </div>
            </div>
          </div>
          <Button onClick={handlePayment} disabled={isProcessing} className="w-full mt-6">
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Now
              </>
            )}
          </Button>
        </Card>
      )}
    </div>
  )
}
