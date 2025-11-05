import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const featuredItems = [
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    price: "$2,499",
    image: "/walnut-dining-table-wood-furniture.jpg",
    rating: 5,
    reviews: 24,
  },
  {
    id: 2,
    name: "Oak Bar Stool Set",
    category: "Seating",
    price: "$899",
    image: "/oak-bar-stool-custom-wood.jpg",
    rating: 4.8,
    reviews: 18,
  },
  {
    id: 3,
    name: "Cherry Bookshelf",
    category: "Storage",
    price: "$1,799",
    image: "/cherry-wood-bookshelf-modern-design.jpg",
    rating: 5,
    reviews: 31,
  },
  {
    id: 4,
    name: "Maple Coffee Table",
    category: "Tables",
    price: "$1,299",
    image: "/maple-coffee-table-handcrafted-wood.jpg",
    rating: 4.9,
    reviews: 22,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our finest handcrafted pieces, each selected for its exceptional quality and timeless design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <div className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-square">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase">{item.category}</p>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{item.reviews}</span>
                  </div>

                  <p className="text-lg font-bold text-primary pt-2">{item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/products">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
