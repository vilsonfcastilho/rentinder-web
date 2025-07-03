const highlights = [
  {
    title: 'Verified Listings',
    icon: '',
    description: 'All our listings are verified for your peace of mind',
  },
  {
    title: 'Top Rated',
    icon: '',
    description: 'Highly rated properties and landlords',
  },
  {
    title: 'Quick Process',
    icon: '',
    description: 'Fast and efficient rental process',
  },
  {
    title: 'Secure Payments',
    icon: '',
    description: 'Safe and secure payment methods',
  },
]

export function Highlights() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <div className="bg-white rounded-lg shadow-md p-6" key={index}>
            <h3 className="font-bold text-xl mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {highlight.title}
            </h3>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
