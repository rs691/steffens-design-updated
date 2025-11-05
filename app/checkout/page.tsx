"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/hooks/use-cart"
import { AlertCircle, Check } from "lucide-react"
import CheckoutForm from "@/components/checkout/checkout-form"

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, clearCart } = useCart()
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping")
  const [loading, setLoading] = useState(false)
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  })
  const [orderNumber, setOrderNumber] = useState("")

  if (cart.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-[calc(100vh-200px)] bg-background py-12 flex items-center justify-center">
        <div className="bg-card border border-border rounded-lg p-8 text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add items to your cart before checking out</p>
          <Button onClick={() => router.push("/products")} className="w-full">
            Continue Shopping
          </Button>
        </div>
      </div>
    )
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 1000 ? 0 : 50
  const tax = Math.round(subtotal * 0.1 * 100) / 100
  const total = subtotal + shipping + tax

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSuccess = async () => {
    setLoading(true)
    try {
      // Mock order creation - replace with actual API call
      const ordNum = `ORD-${Date.now()}`
      setOrderNumber(ordNum)

      // Clear cart and move to confirmation
      clearCart()
      setStep("confirmation")
    } catch (error) {
      console.error("Error creating order:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-200px)] bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-12">Checkout</h1>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {(["shipping", "payment", "confirmation"] as const).map((s, index) => (
              <div key={s} className="flex-1 flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step === s
                      ? "bg-primary text-primary-foreground"
                      : ["shipping", "payment", "confirmation"].indexOf(step) > index
                        ? "bg-green-600 text-white"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {["shipping", "payment", "confirmation"].indexOf(step) > index ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < 2 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      ["shipping", "payment", "confirmation"].indexOf(step) > index ? "bg-green-600" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm font-medium text-muted-foreground">
            <span>Shipping</span>
            <span>Payment</span>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <ShippingForm data={shippingData} onChange={setShippingData} onSubmit={handleShippingSubmit} />
            )}

            {step === "payment" && (
              <CheckoutForm onSuccess={handlePaymentSuccess} loading={loading} onBack={() => setStep("shipping")} />
            )}

            {step === "confirmation" && <ConfirmationMessage orderNumber={orderNumber} />}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

              <div className="space-y-3 max-h-96 overflow-y-auto border-b border-border pb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-foreground font-medium">
                      ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-b border-border pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground font-medium">
                    ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground font-medium">
                    {shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground font-medium">
                    ${tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-primary text-lg">
                  ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShippingForm({
  data,
  onChange,
  onSubmit,
}: {
  data: any
  onChange: (data: any) => void
  onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <form onSubmit={onSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Shipping Address</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
          <Input
            required
            value={data.firstName}
            onChange={(e) => onChange({ ...data, firstName: e.target.value })}
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
          <Input
            required
            value={data.lastName}
            onChange={(e) => onChange({ ...data, lastName: e.target.value })}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
          <Input
            type="email"
            required
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
          <Input
            type="tel"
            required
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Street Address</label>
        <Input
          required
          value={data.street}
          onChange={(e) => onChange({ ...data, street: e.target.value })}
          placeholder="123 Main St"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">City</label>
          <Input
            required
            value={data.city}
            onChange={(e) => onChange({ ...data, city: e.target.value })}
            placeholder="New York"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">State</label>
          <Input
            required
            value={data.state}
            onChange={(e) => onChange({ ...data, state: e.target.value })}
            placeholder="NY"
            maxLength={2}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">ZIP Code</label>
          <Input
            required
            value={data.zip}
            onChange={(e) => onChange({ ...data, zip: e.target.value })}
            placeholder="10001"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Continue to Payment
      </Button>
    </form>
  )
}

function ConfirmationMessage({ orderNumber }: { orderNumber: string }) {
  const router = useRouter()

  return (
    <div className="bg-card border border-border rounded-lg p-12 text-center space-y-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 text-green-600" />
      </div>

      <h2 className="text-3xl font-bold text-foreground">Order Confirmed!</h2>

      <div className="space-y-2">
        <p className="text-muted-foreground">Thank you for your purchase. Your order has been received.</p>
        <p className="text-lg font-semibold text-foreground">
          Order Number: <span className="text-primary">{orderNumber}</span>
        </p>
      </div>

      <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
        <p>
          A confirmation email has been sent to your email address. You can track your order status from your account
          dashboard.
        </p>
      </div>

      <div className="flex gap-4 justify-center pt-4">
        <Button onClick={() => router.push("/orders")} size="lg">
          View Orders
        </Button>
        <Button onClick={() => router.push("/products")} size="lg" variant="outline">
          Continue Shopping
        </Button>
      </div>
    </div>
  )
}
