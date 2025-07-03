import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="City skyline"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          About [Your Platform Name]
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl mx-auto">
          Connecting property owners and renters efficiently and transparently
          in a seamless, user-friendly environment.
        </p>
      </div>
    </section>
  )
}
