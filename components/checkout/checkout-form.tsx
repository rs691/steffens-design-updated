"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, Loader2 } from "lucide-react"

interface CheckoutFormProps {
  onSuccess: () => void
  loading: boolean
  onBack: () => void
}

export default function CheckoutForm({ onSuccess, loading, onBack }: CheckoutFormProps) {
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })
  const [error, setError] = useState("")
  const [processing, setProcessing] = useState(false)

  const handleCardNumberChange = (value: string) => {
    // Remove spaces and keep only digits
    const cleaned = value.replace(/\s/g, "")
    // Add spaces every 4 digits
    const formatted = cleaned.replace(/(\d{4})/g, "$1 ").trim()
    setCardData({ ...cardData, cardNumber: formatted })
  }

  const handleExpiryChange = (value: string) => {
    // Format as MM/YY
    const cleaned = value.replace(/\D/g, "")
    if (cleaned.length >= 2) {
      const formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`
      setCardData({ ...cardData, expiry: formatted })
    } else {
      setCardData({ ...cardData, expiry: cleaned })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setProcessing(true)

    try {
      // Validate card data
      if (!cardData.cardName || !cardData.cardNumber || !cardData.expiry || !cardData.cvc) {
        setError("Please fill in all card details")
        return
      }

      // In a real app, this would send to Stripe
      // For now, simulate a successful payment
      await new Promise((resolve) => setTimeout(resolve, 2000))

      onSuccess()
    } catch (err) {
      setError("Payment failed. Please try again.")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Payment Information</h2>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
        <Input
          required
          value={cardData.cardName}
          onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
        <Input
          required
          value={cardData.cardNumber}
          onChange={(e) => handleCardNumberChange(e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
          <Input
            required
            value={cardData.expiry}
            onChange={(e) => handleExpiryChange(e.target.value)}
            placeholder="MM/YY"
            maxLength={5}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">CVC</label>
          <Input
            required
            value={cardData.cvc}
            onChange={(e) =>
              setCardData({
                ...cardData,
                cvc: e.target.value.replace(/\D/g, "").slice(0, 4),
              })
            }
            placeholder="123"
            maxLength={4}
            type="password"
          />
        </div>
      </div>

      {error && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-md p-3 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 mt-0.5 text-destructive flex-shrink-0" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
        <p className="text-sm text-blue-800">
          Use card <strong>4242 4242 4242 4242</strong> for testing (Exp: 12/25, CVC: 123)
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onBack}
          disabled={processing || loading}
          className="flex-1 bg-transparent"
        >
          Back
        </Button>
        <Button type="submit" size="lg" disabled={processing || loading} className="flex-1">
          {processing || loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Complete Purchase"
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">Your payment information is secure and encrypted</p>
    </form>
  )
}
