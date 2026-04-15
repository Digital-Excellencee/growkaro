import './globals.css'

export const metadata = {
  title: 'NEXUS | Full-Service Digital Marketing Agency',
  description: 'India ki sabse premium digital marketing agency. Web, SEO, Social, Branding - A to Z sab kuch.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
