"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProductCard from "@/components/products/product-card"
import { Search, Sliders } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  category: string
  wood_type: string
  image_url: string
  rating: number
  reviews_count: number
}

const CATEGORIES = ["All", "Tables", "Seating", "Storage", "Decor", "Custom"]
const WOOD_TYPES = ["All", "Walnut", "Oak", "Cherry", "Maple", "Ash"]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedWood, setSelectedWood] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 5000])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()
      setProducts(data)
      setFilteredProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Filter by wood type
    if (selectedWood !== "All") {
      filtered = filtered.filter((p) => p.wood_type === selectedWood)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    // Filter by price range
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    setFilteredProducts(filtered)
  }, [products, selectedCategory, selectedWood, searchTerm, priceRange])

  return (
    <div className="min-h-[calc(100vh-200px)] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Collections</h1>
          <p className="text-lg text-muted-foreground">Explore our handcrafted wood furniture collection</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 space-y-6 sticky top-20">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  Filters
                </h3>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Category</label>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wood Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Wood Type</label>
                <div className="space-y-2">
                  {WOOD_TYPES.map((wood) => (
                    <button
                      key={wood}
                      onClick={() => setSelectedWood(wood)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedWood === wood ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {wood}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Price Range</label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </p>
                </div>
              </div>

              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedWood("All")
                  setSearchTerm("")
                  setPriceRange([0, 5000])
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="flex items-center justify-center h-96">
                <p className="text-muted-foreground">No products found</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-6">Showing {filteredProducts.length} products</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
