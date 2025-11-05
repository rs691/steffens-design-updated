import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image_url: string
    rating: number
    reviews_count: number
    wood_type: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group h-full">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-square cursor-pointer">
          <img
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-primary uppercase mb-1">{product.wood_type}</p>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({product.reviews_count})</span>
          </div>

          <p className="text-lg font-bold text-primary">${product.price.toLocaleString()}</p>
        </div>
      </Link>

      <div className="mt-4 flex gap-2">
        <Link href={`/products/${product.id}`} className="flex-grow">
          <Button variant="outline" className="w-full bg-transparent">
            View Details
          </Button>
        </Link>
        <Button size="icon" className="bg-primary hover:bg-primary/90">
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
