import Link from "next/link"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/events/event-card"
import { Calendar, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    name: "Spring Craft Fair",
    date: "2025-04-15",
    location: "Downtown Convention Center, New York, NY",
    booth: "Booth #A-42",
    description: "Annual spring craft fair featuring local artisans and handmade goods.",
    attendance: "5000+",
    featured: true,
  },
  {
    id: 2,
    name: "Artisan Wood Expo",
    date: "2025-05-20",
    location: "Central Park, New York, NY",
    booth: "Booth #W-15",
    description: "Specialized woodworking and furniture design expo.",
    attendance: "3000+",
    featured: true,
  },
  {
    id: 3,
    name: "Summer Design Market",
    date: "2025-06-10",
    location: "Riverside Plaza, New York, NY",
    booth: "Booth #D-28",
    description: "Curated marketplace for designers and craftspeople.",
    attendance: "4500+",
    featured: false,
  },
  {
    id: 4,
    name: "Fall Home & Decor Expo",
    date: "2025-09-18",
    location: "Convention Hall, Boston, MA",
    booth: "Booth #H-05",
    description: "Large home and interior design exposition.",
    attendance: "8000+",
    featured: true,
  },
  {
    id: 5,
    name: "Holiday Craft Market",
    date: "2025-11-01",
    location: "Grand Ballroom, New York, NY",
    booth: "Booth #H-12",
    description: "Festive holiday shopping event with exclusive pre-order opportunities.",
    attendance: "6000+",
    featured: false,
  },
  {
    id: 6,
    name: "New Year Design Summit",
    date: "2026-01-15",
    location: "Conference Center, New York, NY",
    booth: "Booth #S-08",
    description: "Annual summit for design professionals and enthusiasts.",
    attendance: "2000+",
    featured: false,
  },
]

export default function EventsPage() {
  const upcomingEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="min-h-[calc(100vh-200px)] bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at craft shows and design expos across the country. Meet our team and see our latest creations in
            person.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Year-Round Shows</h3>
              <p className="text-sm text-muted-foreground">Participate in 6+ major craft and design events annually</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Regional Coverage</h3>
              <p className="text-sm text-muted-foreground">Showcasing our work from New York to regional venues</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Connect With Us</h3>
              <p className="text-sm text-muted-foreground">Meet the craftspeople behind our exclusive collections</p>
            </div>
          </div>

          {/* Featured Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents
                .filter((event) => event.featured)
                .map((event) => (
                  <EventCard key={event.id} event={event} featured />
                ))}
            </div>
          </div>

          {/* All Events */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">All Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Our Events</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Subscribe to our newsletter to get early notifications about upcoming shows and exclusive event previews.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Subscribe to Newsletter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
