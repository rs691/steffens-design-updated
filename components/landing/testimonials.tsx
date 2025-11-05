import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Interior Designer",
    image: "/professional-woman-diverse.png",
    text: "The attention to detail and craftsmanship is unparalleled. My clients are consistently amazed by the quality.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Architect",
    image: "/professional-man.jpg",
    text: "Steffens Showcase brings our design visions to life with precision and artistry. Highly recommend.",
    rating: 5,
  },
  {
    name: "Emma Rosewood",
    role: "Homeowner",
    image: "/customer-woman.jpg",
    text: "Our custom dining table is the centerpiece of our home. Every meal feels special at this table.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-muted/50 to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Loved by Our Customers</h2>
          <p className="text-lg text-muted-foreground">See what people are saying about our handcrafted furniture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover bg-muted"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
