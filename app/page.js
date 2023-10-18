"use client"
import { redirect } from 'next/navigation'
import React from 'react'

const Home = () => {
    if(window?.location?.pathname==="/"){
        redirect("/en")
    }
  return (
    <div>
      asdasda
    </div>
  )
}

export default Home
