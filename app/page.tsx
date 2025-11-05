import HeroSection from "@/components/landing/hero-section"
import FeaturedProducts from "@/components/landing/featured-products"
import Testimonials from "@/components/landing/testimonials"
import NewsletterSection from "@/components/landing/newsletter-section"
import CTA from "@/components/landing/cta-section"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
      <NewsletterSection />
    </div>
  )
}
