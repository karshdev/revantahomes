import Navigation from '@/components/Navigation'
import React from 'react'
import Section1 from './Section1'

const Header = () => {
  return ( 
    <div className="w-[100vw] h-[100vh] bg-gradient-to-tr from-blue-100 to-blue-100 overflow-hidden">
      <Navigation />
      <Section1 />
      <img src='/Cloud.png' className='position absolute top-10 w-[749px] h-[248px] opacity-100'/>
      <img src='/Cloud2.png' className='position absolute top-10 right-5 w-[749px] h-[248px] opacity-100'/>
    </div>
  )
}

export default Header 
