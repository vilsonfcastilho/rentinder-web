import Image from 'next/image'
import { JSX, SVGProps } from 'react'

export default function Property() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src=""
          alt="Property Image"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
          style={{ aspectRatio: '1600/900', objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Stunning Beachfront Villa
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">
            Experience the ultimate in luxury living with this stunning
            beachfront villa, featuring breathtaking ocean views and
            unparalleled amenities.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="flex items-center gap-4 pb-12">
          <Image
            src=""
            alt="Avatar Image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Olivia Davis</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <StarIcon className="h-4 w-4 fill-black" />
              <StarIcon className="h-4 w-4 fill-black" />
              <StarIcon className="h-4 w-4 fill-black" />
              <StarIcon className="h-4 w-4 fill-black" />
              <StarIcon className="h-4 w-4" />
              <span>4.9 (125 reviews)</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Property Details</h2>
            <div className="flex items-center gap-2">
              <BedIcon className="h-6 w-6" />
              <span>4 Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <BathIcon className="h-6 w-6" />
              <span>3 Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="h-6 w-6" />
              <span>2,500 sq ft</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-6 w-6" />
              <span>Available from June 1st</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Amenities</h2>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <WifiIcon className="h-6 w-6" />
                <span>High-speed WiFi</span>
              </li>
              <li className="flex items-center gap-2">
                <TvIcon className="h-6 w-6" />
                <span>Smart TV</span>
              </li>
              <li className="flex items-center gap-2">
                <PocketIcon className="h-6 w-6" />
                <span>Private Pool</span>
              </li>
              <li className="flex items-center gap-2">
                <ParkingMeterIcon className="h-6 w-6" />
                <span>Parking</span>
              </li>
              <li className="flex items-center gap-2">
                <FlameIcon className="h-6 w-6" />
                <span>Outdoor Grill</span>
              </li>
              <li className="flex items-center gap-2">
                <HomeIcon className="h-6 w-6" />
                <span>Fitness Center</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-12 grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-muted-foreground">
              Welcome to our stunning beachfront villa, where luxury and comfort
              collide. This property offers the ultimate in relaxation and
              indulgence, with breathtaking ocean views and unparalleled
              amenities. From the private pool to the high-speed WiFi, every
              detail has been carefully curated to ensure an unforgettable stay.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Map Location</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Why Rent This Property?</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <CrownIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-bold">Luxury Living</h3>
                  <p className="text-muted-foreground">
                    Experience the ultimate in luxury and comfort with this
                    stunning beachfront villa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LocateIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-bold">Unbeatable Location</h3>
                  <p className="text-muted-foreground">
                    Situated in the heart of the city, just steps away from the
                    beach and all the best attractions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AccessibilityIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-bold">Exceptional Amenities</h3>
                  <p className="text-muted-foreground">
                    Enjoy a private pool, high-speed WiFi, smart TV, and more in
                    this luxurious villa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function AccessibilityIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}

function BathIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  )
}

function BedIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function CrownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  )
}

function FlameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}

function ParkingMeterIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 9a3 3 0 1 1 6 0" />
      <path d="M12 12v3" />
      <path d="M11 15h2" />
      <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
      <path d="M12 19v3" />
    </svg>
  )
}

function PocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
      <polyline points="8 10 12 14 16 10" />
    </svg>
  )
}

function RulerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}

function TvIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}

function WifiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  )
}
