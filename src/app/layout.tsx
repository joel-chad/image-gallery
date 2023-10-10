import './globals.css'


export const metadata = {
  title: 'Image Gallery with Pexels',
  description: 'Next JS image gallery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
