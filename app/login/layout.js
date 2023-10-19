import AuthProvider from '../../components/AuthProvider'

import '../../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create  App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='min-h-[100vh]'>
            <div className=" bg-[url('/explore_images/explore_bg.png')] bg-brand  ml-auto mr-auto   md:pr-[40px] px-4 bg-blend-multiply">
            {children}
            </div>
          </div>
        </AuthProvider>
        </body>
    </html>
  )
}
