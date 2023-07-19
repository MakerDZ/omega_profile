import './globals.css'
import { config } from '../../config'

export const metadata = {
  title: config.header.title,
  description: config.header.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
