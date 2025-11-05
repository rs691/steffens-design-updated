interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    category: string
    year: number
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <div className="relative overflow-hidden bg-muted aspect-video">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary uppercase">{project.category}</span>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      </div>
    </div>
  )
}
