'use client'

import { setClientSessionOnCookies } from '@/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

interface FormData {
  email: string
  password: string
}

export default function SignIn() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
    // Clear error when user starts typing again
    if (error) setError(null)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Use environment variable for API URL in production
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333'
      const response = await fetch(`${apiUrl}/v1/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
      })

      if (response.ok) {
        const { data } = await response.json()
        const token = data.access_token

        const session = await setClientSessionOnCookies(token)

        if (session !== null) {
          router.push('/')
          router.refresh() // Refresh to update any server components
        } else {
          setError('Failed to set session. Please try again.')
        }
      } else {
        const errorData = await response.json().catch(() => null)
        setError(
          errorData?.message ||
            'Invalid email or password. Please check your credentials and try again.',
        )
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.')
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="mx-auto w-full max-w-md rounded-lg border bg-background p-6 shadow-lg sm:p-8">
        <div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign in</h1>
            <p className="text-muted-foreground">
              {"Don't"} have an account?{' '}
              <Link
                href="/sign-up"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </Link>
            </p>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                className="w-full h-10 border border-zinc-300 rounded-md px-2"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>
            <div className="flex-col">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full h-10 border border-zinc-300 rounded-md px-2"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white h-10 rounded-md"
              disabled={isLoading}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
