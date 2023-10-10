import Navigation from '@/components/Navigation'
import React from 'react'

const Header = () => {
  return (
    <div className="position relative w-[100vw] h-[100vh] bg-gradient-to-tr from-blue-100 to-blue-100">
      <Navigation />
      <img  src='/Cloud.png' className='position absolute w-[700px] h-[200px] top-[10%] opacity-100 invert grayscale-100 contrast-100'/>
      <img  src='/Cloud2.png' className='position absolute w-[700px] h-[200px] right-0 top-[20%] opacity-100 invert grayscale-100 contrast-100'/>
    </div>
  )
}

export default Header 
