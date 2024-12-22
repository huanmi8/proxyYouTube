import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join('/')
  const { searchParams } = new URL(request.url)
  const queryString = searchParams.toString()
  const url = `https://wallhaven.cc/${path}${queryString ? `?${queryString}` : ''}`

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Wallhaven Proxy',
    },
  })

  const data = await response.text()
  return new NextResponse(data, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'text/plain',
    },
  })
}

