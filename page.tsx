import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to YouTube Proxy
        </h1>
        <p className="mt-3 text-2xl">
          This is a simple proxy for YouTube.com
        </p>
        <div className="mt-6">
          <Link href="/watch?v=dQw4w9WgXcQ" className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
            Watch a Video
          </Link>
        </div>
      </main>
    </div>
  )
}

