import Section2Images from '../components/Section2Images';
import TextContainer from '../components/TextContainer';
import React from 'react'

const Section2 = () => {
    console.log("Hello i am rendering");
  return (
    <div
    className="h-screen bg-no-repeat flex items-center justify-center gap-20"
    style={{ backgroundImage: 'url("ELEMENTS.png")', backgroundPosition: 'center' }}
  >
    <TextContainer />
    <Section2Images />
    </div>
  )
}

export default Section2
