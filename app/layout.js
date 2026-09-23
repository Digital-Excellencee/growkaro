import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'Growthkaro | Full-Service Digital Marketing Agency',
  description: 'India ki sabse powerful digital marketing agency. Website, SEO, Social Media, Branding, Ads, Video — ek agency, infinite growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
