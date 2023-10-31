import React from 'react'
import HeaderMusic from './sections/headerMusic'
import NavBar from '@/app/components/navBar'
import MusicPlayer from './sections/musicPlayer'
import Footer from '@/app/components/footer'

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
