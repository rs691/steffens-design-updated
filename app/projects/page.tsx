import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/projects/project-card"

const projects = [
  {
    id: 1,
    title: "Modern Penthouse Renovation",
    description: "Complete custom furniture suite for a Manhattan penthouse featuring walnut and marble accents.",
    image: "/placeholder.svg?key=penthouse",
    category: "Residential",
    year: 2024,
  },
  {
    id: 2,
    title: "Corporate Executive Office",
    description: "Handcrafted mahogany office suite with integrated storage and conference table.",
    image: "/placeholder.svg?key=executive",
    category: "Commercial",
    year: 2024,
  },
  {
    id: 3,
    title: "Designer Restaurant Installation",
    description: "Custom oak and cherry dining furniture for award-winning restaurant.",
    image: "/placeholder.svg?key=restaurant",
    category: "Hospitality",
    year: 2023,
  },
  {
    id: 4,
    title: "Luxury Hotel Suite Furniture",
    description: "Bespoke furniture collection including beds, seating, and storage solutions.",
    image: "/placeholder.svg?key=hotel",
    category: "Hospitality",
    year: 2023,
  },
  {
    id: 5,
    title: "Residential Library Design",
    description: "Custom cherry bookshelves and reading nook furniture for private residence.",
    image: "/placeholder.svg?key=library",
    category: "Residential",
    year: 2023,
  },
  {
    id: 6,
    title: "Modern Art Gallery Pieces",
    description: "Minimalist display furniture in ash wood for contemporary art gallery.",
    image: "/placeholder.svg?key=gallery",
    category: "Institutional",
    year: 2022,
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Previous Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of handcrafted furniture installations and custom designs
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Next Project</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's create something exceptional together. Contact us for a consultation.
          </p>
          <Link href="/auth">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
