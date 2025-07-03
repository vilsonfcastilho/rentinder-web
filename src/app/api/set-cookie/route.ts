import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json(
        { message: 'Token is required' },
        { status: 400 },
      )
    }

    // Set the cookie
    const response = NextResponse.json({ message: 'Cookie set successfully' })
    response.cookies.set('session', token, {
      httpOnly: true, // Prevent JavaScript access
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'strict', // Prevent CSRF
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to set cookie', error },
      { status: 500 },
    )
  }
}
