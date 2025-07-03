import { cookies } from 'next/headers'

const SESSION_COOKIE_NAME = 'session'
const SESSION_DURATION = 60 * 60 * 24 * 7 // 7 days in seconds

// Client-side functions
export async function setClientSessionOnCookies(token: string) {
  const secureFlag = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  document.cookie = `${SESSION_COOKIE_NAME}=${token}; path=/; max-age=${SESSION_DURATION}${secureFlag}; SameSite=Lax`

  return getClientSessionFromCookies()
}

export function getClientSessionFromCookies() {
  const session = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${SESSION_COOKIE_NAME}=`))

  const token = session ? session.split('=')[1] : null
  console.log('Client session ->', token)
  return token
}

export function deleteClientSessionFromCookies() {
  document.cookie = `${SESSION_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  console.log('Client session cleared.')
}

// Server-side functions
export async function setServerSessionOnCookies(token: string) {
  cookies().set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DURATION,
  })
  console.log('Server session set.')
}

export function getServerSessionFromCookies() {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value
  console.log('Server session ->', session || null)
  return session || null
}

export function deleteServerSessionFromCookies() {
  cookies().set(SESSION_COOKIE_NAME, '', {
    expires: new Date(0),
    path: '/',
  })
  console.log('Server session cleared.')
}

// Utility function to check if we're on the client side
export const isClient = typeof window !== 'undefined'

// Universal functions that work on both client and server
export async function setSessionOnCookies(token: string) {
  return isClient
    ? setClientSessionOnCookies(token)
    : setServerSessionOnCookies(token)
}

export function getSessionFromCookies() {
  return isClient
    ? getClientSessionFromCookies()
    : getServerSessionFromCookies()
}

export function deleteSessionFromCookies() {
  return isClient
    ? deleteClientSessionFromCookies()
    : deleteServerSessionFromCookies()
}
