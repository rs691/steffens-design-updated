import { NextResponse } from "next/server"

const mockProducts = [
  {
    id: "1",
    name: "Walnut Dining Table",
    description:
      "Elegant walnut dining table crafted with precision joinery and hand-finished to bring out the natural grain. This piece seats 6-8 people comfortably and is built to last generations. Each table is custom finished to your specifications.",
    price: 2499,
    category: "Tables",
    wood_type: "Walnut",
    image_url: "/walnut-dining-table-wood-furniture.jpg",
    stock: 5,
    rating: 5,
    reviews_count: 24,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Oak Bar Stool Set",
    description:
      "Set of four handcrafted oak bar stools with cushioned seats and ergonomic design. Perfect for kitchen islands and bar counters. Featuring solid oak wood construction with premium leather cushioning.",
    price: 899,
    category: "Seating",
    wood_type: "Oak",
    image_url: "/oak-bar-stool-custom-wood.jpg",
    stock: 8,
    rating: 4.8,
    reviews_count: 18,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Cherry Bookshelf",
    description:
      "Custom cherry wood bookshelf with five shelves and adjustable spacing for optimal storage. Built with traditional woodworking techniques and hand-sanded for a smooth finish.",
    price: 1799,
    category: "Storage",
    wood_type: "Cherry",
    image_url: "/cherry-wood-bookshelf-modern-design.jpg",
    stock: 3,
    rating: 5,
    reviews_count: 31,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Maple Coffee Table",
    description:
      "Handcrafted maple coffee table with a smooth finish and clean contemporary lines. Features a spacious top and elegant wood grain patterns.",
    price: 1299,
    category: "Tables",
    wood_type: "Maple",
    image_url: "/maple-coffee-table-handcrafted-wood.jpg",
    stock: 6,
    rating: 4.9,
    reviews_count: 22,
    created_at: new Date().toISOString(),
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
