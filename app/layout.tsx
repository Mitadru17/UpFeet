import './globals.css'
import { Inter, Archivo } from 'next/font/google'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })
const archivo = Archivo({ 
  subsets: ['latin'],
  // Add all weights we'll use
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'UpFeet - Techwear Footwear',
  description: 'Exclusive techwear sneakers inspired by modern street fashion and urban aesthetics',
  keywords: 'techwear, sneakers, urban fashion, footwear',
  openGraph: {
    title: 'UpFeet - Techwear Footwear',
    description: 'Exclusive techwear sneakers inspired by modern street fashion',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${archivo.className}`}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
