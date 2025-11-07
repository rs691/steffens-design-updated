import { getSupabaseServer } from "./server"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  wood_type: string
  image_url: string
  stock: number
  rating: number
  reviews_count: number
  created_at: string
}

export async function getProducts(): Promise<Product[]> {
  const supabase = getSupabaseServer()

  const { data, error } = await supabase.from("new_products").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data || []
}

export async function getProductById(id: string): Promise<Product | null> {
  const supabase = getSupabaseServer()

  const { data, error } = await supabase.from("new_products").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return data
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const supabase = getSupabaseServer()

  const { data, error } = await supabase
    .from("new_products")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products by category:", error)
    return []
  }

  return data || []
}
