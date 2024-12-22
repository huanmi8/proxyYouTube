import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const pathname = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams.toString()
  
  // Create the target URL
  const targetUrl = `https://wallhaven.cc${pathname}${searchParams ? `?${searchParams}` : ''}`
  
  try {
    // Forward the request to wallhaven.cc
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'User-Agent': requestHeaders.get('user-agent') || '',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Cookie': requestHeaders.get('cookie') || '',
      },
      body: request.body,
    })

    // Get the response body and headers
    const body = await response.blob()
    const headers = new Headers(response.headers)
    
    // Modify headers to allow cross-origin requests
    headers.set('Access-Control-Allow-Origin', '*')
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    // Create and return the response
    return new NextResponse(body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.error()
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

