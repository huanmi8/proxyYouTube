import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://wallhaven.cc">
            Wallhaven
          </a>
          {' '}Proxy
        </h1>

        <p className="mt-3 text-2xl">
          This is a proxy for Wallhaven. All requests are forwarded to wallhaven.cc.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            href="/search"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Search &rarr;</h3>
            <p className="mt-4 text-xl">
              Search for wallpapers on Wallhaven.
            </p>
          </Link>

          <Link
            href="/latest"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Latest &rarr;</h3>
            <p className="mt-4 text-xl">
              View the latest wallpapers on Wallhaven.
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}

