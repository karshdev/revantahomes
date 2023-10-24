import AuthProvider from '../../../components/AuthProvider'

import '../../../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Revanta Homes',
  description: 'Revanta Homes: Timeless Designs, Beyond Dreams. By Rishabhdeo Builders & Developers, crafting luxury residences with exceptional quality and architectural sophistication, harmonizing seamlessly with their surroundings.',
}

export default function RootLayout({ children,params}) {
  
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
       
        </body>
    </html>
  )
}
