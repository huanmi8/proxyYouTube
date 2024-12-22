import './globals.css'

export const metadata = {
  title: 'Wallhaven Proxy',
  description: 'A proxy for wallhaven.cc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

