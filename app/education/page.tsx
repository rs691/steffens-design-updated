import Link from "next/link"
import { Button } from "@/components/ui/button"
import WoodTypeCard from "@/components/education/wood-type-card"
import { BookOpen, Lightbulb, Leaf } from "lucide-react"

const woodTypes = [
  {
    name: "Walnut",
    color: "from-amber-800 to-amber-900",
    description: "Rich chocolate brown with elegant grain patterns. Premium choice for fine furniture.",
    characteristics: ["Smooth grain", "Highly workable", "Excellent durability", "Rich dark color"],
    uses: ["Dining tables", "Fine furniture", "Cabinetry", "Decorative pieces"],
    hardness: "Very Hard",
    price: "Premium",
  },
  {
    name: "Oak",
    color: "from-yellow-700 to-amber-700",
    description: "Strong grain pattern with light golden tones. Traditional and durable.",
    characteristics: ["Prominent grain", "Very durable", "Easy to work with", "Bold appearance"],
    uses: ["Flooring", "Kitchen cabinets", "Bar stools", "Structural pieces"],
    hardness: "Hard",
    price: "Moderate",
  },
  {
    name: "Cherry",
    color: "from-red-700 to-amber-800",
    description: "Warm reddish-brown tones that deepen with age. Beautiful natural finish.",
    characteristics: ["Fine grain", "Polishes beautifully", "Ages gracefully", "Warm tones"],
    uses: ["Tables", "Cabinetry", "Bookshelf", "Executive furniture"],
    hardness: "Hard",
    price: "Premium",
  },
  {
    name: "Maple",
    color: "from-amber-100 to-amber-300",
    description: "Light blonde color with subtle grain. Clean modern aesthetic.",
    characteristics: ["Fine uniform grain", "Very hard", "Takes stain well", "Modern appeal"],
    uses: ["Coffee tables", "Bar tops", "Modern furniture", "Athletic flooring"],
    hardness: "Very Hard",
    price: "Moderate to Premium",
  },
  {
    name: "Ash",
    color: "from-gray-400 to-amber-200",
    description: "Light color with prominent angular grain. Contemporary appeal.",
    characteristics: ["Dramatic grain", "Flexible", "Light weight", "Modern look"],
    uses: ["Console tables", "Accent pieces", "Contemporary design", "Lightweight furniture"],
    hardness: "Hard",
    price: "Moderate",
  },
  {
    name: "Mahogany",
    color: "from-red-600 to-amber-700",
    description: "Deep reddish-brown with straight grain. Classic luxury wood.",
    characteristics: ["Straight grain", "Highly stable", "Rich patina", "Luxurious appearance"],
    uses: ["Fine dining", "Executive desks", "Heirloom pieces", "Premium furniture"],
    hardness: "Hard",
    price: "Premium",
  },
]

const educationTopics = [
  {
    icon: BookOpen,
    title: "Wood Selection",
    description: "Learn how to choose the right wood for your furniture needs based on durability and aesthetics.",
  },
  {
    icon: Lightbulb,
    title: "Craftsmanship",
    description: "Discover the traditional joinery techniques and hand-finishing methods that make quality furniture.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Understand our commitment to sustainable forestry and environmentally responsible sourcing.",
  },
]

export default function EducationPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Wood Education</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about the different wood types we use and the techniques that make our furniture exceptional
          </p>
        </div>
      </section>

      {/* Education Topics */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Explore Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationTopics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground">{topic.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Wood Types */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Wood Types We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {woodTypes.map((wood) => (
              <WoodTypeCard key={wood.name} wood={wood} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Browse our collections to find the perfect custom wood piece for your space
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
