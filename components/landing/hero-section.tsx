import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Handcrafted Excellence in Wood Design
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-balance max-w-lg">
                Discover premium custom wood furniture and design pieces that elevate your space. Each creation is a
                masterpiece of craftsmanship and artistry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-white/10 bg-transparent"
                >
                  View Projects
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm opacity-90">Satisfied Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years of Craft</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1000+</p>
                <p className="text-sm opacity-90">Pieces Created</p>
              </div>
            </div>
          </div>

          {/* Right side - Image placeholder with gradient */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 border border-primary-foreground/20 flex items-center justify-center">
              <img
                src="/premium-wood-furniture-craftsmanship-modern-design.jpg"
                alt="Custom wood furniture showcase"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-lg p-6 shadow-xl border border-primary-foreground/10 max-w-xs">
              <p className="text-sm font-semibold mb-2">Artisan Quality</p>
              <p className="text-xs text-muted-foreground">
                Every piece is handcrafted with precision and attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
