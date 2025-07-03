import Image from 'next/image'
import Link from 'next/link'
import { SVGProps } from 'react'

interface IPostCardProps {
  title: string
  location: string
  bedrooms: number
  value: number
  images: string
}

export async function PostCard({
  title,
  location,
  bedrooms,
  value,
  images,
}: IPostCardProps) {
  return (
    <div className="relative group">
      <Link href="/rent/1" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View property</span>
      </Link>
      <Image
        src={images}
        alt="Property image"
        unoptimized
        width={400}
        height={300}
        className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity border"
      />
      <div className="p-4">
        <h3 className="font-semibold tracking-tight text-lg">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BedIcon className="w-4 h-4" />
          <span>{bedrooms}</span>
        </div>
        <div className="mt-2 font-semibold">${value}</div>
      </div>
    </div>
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

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
