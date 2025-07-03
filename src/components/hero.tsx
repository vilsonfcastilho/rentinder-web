import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src=""
          alt="Rental property"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Rental
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover amazing properties in your area
        </p>
        <button
          type="submit"
          className="w-full bg-black text-white h-10 rounded-md"
        >
          Start Searching
        </button>
      </div>
    </div>
  )
}
