interface WoodTypeCardProps {
  wood: {
    name: string
    color: string
    description: string
    characteristics: string[]
    uses: string[]
    hardness: string
    price: string
  }
}

export default function WoodTypeCard({ wood }: WoodTypeCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Color swatch */}
      <div className={`h-32 bg-gradient-to-br ${wood.color}`} />

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground">{wood.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{wood.description}</p>

        {/* Characteristics */}
        <div>
          <p className="text-xs font-semibold text-foreground uppercase mb-2">Characteristics</p>
          <div className="flex flex-wrap gap-2">
            {wood.characteristics.map((char) => (
              <span key={char} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Uses */}
        <div>
          <p className="text-xs font-semibold text-foreground uppercase mb-2">Common Uses</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {wood.uses.map((use) => (
              <li key={use} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {use}
              </li>
            ))}
          </ul>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Hardness</p>
            <p className="font-semibold text-foreground text-sm">{wood.hardness}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Price Range</p>
            <p className="font-semibold text-foreground text-sm">{wood.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
