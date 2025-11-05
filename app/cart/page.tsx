"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem } from "@/lib/hooks/use-cart"
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? (subtotal > 1000 ? 0 : 50) : 0
  const tax = Math.round(subtotal * 0.1 * 100) / 100
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-[calc(100vh-200px)] bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-12">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-card rounded-lg border border-border p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
            <Link href="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItemRow key={item.id} item={item} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
              ))}

              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full text-destructive hover:text-destructive/90 bg-transparent"
                >
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-20 space-y-4">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground font-medium">
                      ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground font-medium">
                      {shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground font-medium">
                      ${tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-bold text-primary text-lg">
                      ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <Link href="/checkout" className="w-full">
                  <Button className="w-full" size="lg">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/products">
                  <Button variant="outline" className="w-full bg-transparent">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Trust badges */}
                <div className="pt-4 space-y-2 text-xs text-muted-foreground border-t border-border">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Free shipping on orders over $1000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CartItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItem
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 flex gap-4">
      <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
        <img src={item.image_url || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow">
        <Link href={`/products/${item.id}`}>
          <h3 className="font-semibold text-foreground hover:text-primary transition-colors">{item.name}</h3>
        </Link>
        <p className="text-lg font-bold text-primary mt-2">${item.price.toLocaleString()}</p>
      </div>

      <div className="flex flex-col items-end justify-between gap-4">
        <button
          onClick={() => onRemove(item.id)}
          className="text-destructive hover:text-destructive/90 transition-colors p-1"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>

        <div className="flex items-center border border-border rounded-lg">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 hover:bg-muted"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-1 font-semibold text-foreground min-w-12 text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 hover:bg-muted"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm text-muted-foreground mb-2">Subtotal</p>
        <p className="text-lg font-bold text-foreground">
          ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  )
}
