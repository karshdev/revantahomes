import AuthProvider from '../../components/AuthProvider'

import '../../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Revanta',
  description: 'Revanta Homes: Timeless Designs, Beyond Dreams. By Rishabhdeo Builders & Developers, crafting luxury residences with exceptional quality and architectural sophistication, harmonizing seamlessly with their surroundings.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='min-h-[100vh]'>
            <div className='max-w-[600px] ml-auto mr-auto  sm:max-w-[640px] md:max-w-[768px] md:pl-[40px] md:pr-[40px] lg:max-w-[1024px] xl:max-w-[1366px]  '>
            {children}
            </div>
          </div>
        </AuthProvider>
        </body>
    </html>
  )
}
