import { getSupabaseServer } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { email, type } = await request.json()

    if (!email || !type) {
      return Response.json({ error: "Missing email or type" }, { status: 400 })
    }

    const supabase = getSupabaseServer()

    const { error } = await supabase.from("visitors").insert({
      email,
      type,
    })

    if (error) {
      console.error("Error tracking visitor:", error)
      return Response.json({ error: "Failed to track visitor" }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("API error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
