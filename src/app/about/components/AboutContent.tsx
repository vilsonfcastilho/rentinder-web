import Image from 'next/image'

export default function AboutContent() {
  return (
    <div className="space-y-20 py-16">
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is simple: to connect property owners and renters in a
              way that is efficient, transparent, and mutually beneficial. We
              aim to provide a marketplace where Landlords, Agencies, and
              Tenants can collaborate, communicate, and rate each other for an
              enhanced experience.
            </p>
            <button
              type="submit"
              className="bg-black text-white h-10 rounded-md px-4"
            >
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Happy tenants and landlords"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Choose account type"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Choose Your Account Type
              </h3>
              <p>
                Select the account type that fits your needs: Agency, Landlord,
                or Tenant.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Create listings"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Create Ads and Post Listings
              </h3>
              <p>
                Easily create detailed property listings to advertise your
                available apartments.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Rate and review"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Rating System for Transparency
              </h3>
              <p>
                Share feedback about other users to ensure the best experiences
                for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Wide exposure for Landlords & Agencies</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Easy property management and advertising</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  Transparent ratings and reviews for informed decisions
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Platform benefits"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p>We believe in keeping things clear and open for everyone.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ease of Use</h3>
              <p>Our platform is designed to be intuitive and user-friendly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p>Building a respectful and reliable network of users.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We are proud to be part of this real estate ecosystem, helping
          landlords, agencies, and tenants build strong, lasting relationships.
        </p>
        <button
          type="submit"
          className="bg-black text-white h-10 rounded-md px-4"
        >
          Sign Up Now
        </button>
      </section>
    </div>
  )
}
