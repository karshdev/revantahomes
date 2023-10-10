import Navigation from '@/components/Navigation'
import React from 'react'
import Section1 from './Section1'

const Header = () => {
  return ( 
    <div className="w-[100vw] h-[100vh] bg-gradient-to-tr from-blue-100 to-blue-100 overflow-hidden">
      <Navigation />
      <Section1 />
    </div>
  )
}

export default Header 
