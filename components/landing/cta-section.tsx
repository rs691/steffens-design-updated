import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Space?</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
          Start your custom furniture journey today. Browse our collections, explore design options, and find the
          perfect piece for your home.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/education">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-white/10 bg-transparent"
            >
              Learn About Wood
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
