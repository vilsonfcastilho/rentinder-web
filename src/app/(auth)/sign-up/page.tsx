'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

interface FormData {
  name: string
  email: string
  password: string
}

export default function Component() {
  const [type, setType] = useState('TENANT')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  })
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3333/v1/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, type }),
    })

    if (res.ok) {
      router.push('/sign-in')
    } else {
      console.log('Login failed')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="mx-auto w-full max-w-md rounded-lg border bg-background p-6 shadow-lg sm:p-8">
        <div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <button
              type="button"
              onClick={() => setType('AGENCY')}
              className={`w-full h-10 rounded-md ${
                type === 'AGENCY'
                  ? 'bg-black text-white'
                  : 'bg-background border border-input border-zinc-300'
              }`}
            >
              Agency
            </button>
            <button
              type="button"
              onClick={() => setType('LANDLORD')}
              className={`w-full h-10 rounded-md ${
                type === 'LANDLORD'
                  ? 'bg-black text-white'
                  : 'bg-background border border-input border-zinc-300'
              }`}
            >
              Landlord
            </button>
            <button
              type="button"
              onClick={() => setType('TENANT')}
              className={`w-full h-10 rounded-md ${
                type === 'TENANT'
                  ? 'bg-black text-white'
                  : 'bg-background border border-input border-zinc-300'
              }`}
            >
              Tenant
            </button>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full h-10 border border-zinc-300 rounded-md px-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                className="w-full h-10 border border-zinc-300 rounded-md px-2"
                value={formData.email}
                onChange={handleChange}
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
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white h-10 rounded-md"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
