import { MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  event: {
    id: number
    name: string
    date: string
    location: string
    booth: string
    description: string
    attendance: string
  }
  featured?: boolean
}

export default function EventCard({ event, featured }: EventCardProps) {
  const eventDate = new Date(event.date)
  const month = eventDate.toLocaleDateString("en-US", { month: "short" })
  const day = eventDate.getDate()
  const year = eventDate.getFullYear()

  return (
    <div
      className={`border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
        featured ? "bg-gradient-to-br from-primary/5 to-secondary/5" : "bg-card"
      }`}
    >
      {featured && (
        <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold text-center">
          Featured Event
        </div>
      )}

      <div className={`p-6 space-y-4 ${featured ? "lg:flex lg:gap-6 lg:items-center lg:space-y-0" : ""}`}>
        {/* Date */}
        <div className={`${featured ? "lg:flex-shrink-0 text-center lg:border-r lg:border-border lg:pr-6" : ""}`}>
          <div className="flex items-center justify-center lg:flex-col gap-2 lg:gap-0">
            <p className="text-sm font-semibold text-muted-foreground uppercase">{month}</p>
            <p className="text-3xl lg:text-4xl font-bold text-primary">{day}</p>
            <p className="text-sm text-muted-foreground">{year}</p>
          </div>
        </div>

        {/* Event Details */}
        <div className={`flex-grow space-y-3 ${featured ? "lg:py-0" : ""}`}>
          <h3 className="text-xl lg:text-2xl font-bold text-foreground">{event.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>

          <div className="space-y-2 pt-2">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground">{event.location}</p>
                <p className="text-muted-foreground">{event.booth}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Users className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">Expected attendance: {event.attendance}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`${featured ? "lg:flex-shrink-0" : "pt-4"}`}>
          <Button variant="outline" className="w-full lg:w-auto bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
