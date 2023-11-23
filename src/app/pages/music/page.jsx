import React from 'react'
import HeaderMusic from './sections/headerMusic'
import NavBar from '@/app/components/navBar'

import Footer from '@/app/components/footer'
import MusicPlayer from './sections/musicPlayer'

export default function page() {
  return (
    <>
    <NavBar/>
    <HeaderMusic/>
    <MusicPlayer/>
    <Footer/>
    </>
  )
}
