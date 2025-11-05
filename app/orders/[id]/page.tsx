"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Calendar, MapPin, DollarSign } from "lucide-react"

interface OrderDetail {
  id: string
  order_number: string
  created_at: string
  total_amount: number
  status: "pending" | "processing" | "shipped" | "delivered"
  items: Array<{
    id: string
    name: string
    quantity: number
    price: number
    image_url: string
  }>
  shipping_address: {
    street: string
    city: string
    state: string
    zip: string
  }
}

export default function OrderDetailPage() {
  const params = useParams()
  const router = useRouter()
  const orderId = params.id as string
  const [order, setOrder] = useState<OrderDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrder()
  }, [orderId])

  const fetchOrder = async () => {
    try {
      // Mock order data - replace with actual Supabase query
      const mockOrder: OrderDetail = {
        id: orderId,
        order_number: "ORD-001",
        created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        total_amount: 2549,
        status: "delivered",
        items: [
          {
            id: "1",
            name: "Walnut Dining Table",
            quantity: 1,
            price: 2499,
            image_url: "/walnut-dining-table-wood-furniture.jpg",
          },
        ],
        shipping_address: {
          street: "123 Main St",
          city: "New York",
          state: "NY",
          zip: "10001",
        },
      }
      setOrder(mockOrder)
    } catch (error) {
      console.error("Error fetching order:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <p className="text-muted-foreground">Loading order...</p>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <p className="text-muted-foreground">Order not found</p>
      </div>
    )
  }

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
  }

  const date = new Date(order.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-[calc(100vh-200px)] bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary hover:text-primary/90 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Orders</span>
        </button>

        <div className="space-y-8">
          {/* Order Header */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-foreground">{order.order_number}</h1>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${statusColors[order.status]}`}>
                {order.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Order Date</span>
                </div>
                <p className="font-semibold text-foreground">{date}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Package className="w-4 h-4" />
                  <span className="text-sm">Items</span>
                </div>
                <p className="font-semibold text-foreground">{order.items.length}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">Total</span>
                </div>
                <p className="font-semibold text-foreground">${order.total_amount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/50">
              <h2 className="font-semibold text-foreground">Order Items</h2>
            </div>
            <div className="divide-y divide-border">
              {order.items.map((item) => (
                <div key={item.id} className="p-6 flex gap-4">
                  <img
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover bg-muted"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="text-primary font-bold mt-2">${item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground text-lg">Shipping Address</h2>
            </div>
            <div className="text-foreground space-y-1">
              <p>{order.shipping_address.street}</p>
              <p>
                {order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zip}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button variant="outline" className="flex-grow bg-transparent">
              Print Order
            </Button>
            <Button variant="outline" className="flex-grow bg-transparent">
              Track Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
