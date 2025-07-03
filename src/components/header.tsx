'use client'

import { deleteClientSessionFromCookies } from '@/auth'
import Link from 'next/link'
import { JSX, SVGProps } from 'react'

export async function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  async function handleLogou() {
    await deleteClientSessionFromCookies()

    window.location.href = '/'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4">
      <div className="container flex items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/properties" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary-foreground" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-primary-foreground hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/buy"
            className="text-sm font-medium text-primary-foreground hover:underline"
            prefetch={false}
          >
            Buy
          </Link>
          <Link
            href="/rent"
            className="text-sm font-medium text-primary-foreground hover:underline"
            prefetch={false}
          >
            Rent
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-primary-foreground hover:underline"
            prefetch={false}
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogou}
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/sign-in"
              className="text-sm font-medium text-primary-foreground hover:underline"
              prefetch={false}
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

function MountainIcon(
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
