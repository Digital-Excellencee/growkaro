import './globals.css'

export const metadata = {
  title: 'Growthkaro | Full-Service Digital Marketing Agency',
  description: 'India ki sabse powerful digital marketing agency. Website, SEO, Social Media, Branding, Ads, Video — ek agency, infinite growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
