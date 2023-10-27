import React from 'react'
import AboutMe from '../aboutMe'
import Gallery from '../gallery'

export default function AboutMeSection() {
  return (
    <div className='flex flex-col w-full md:flex-row'>
      <AboutMe/>
      <Gallery/>
    </div>
  )
}
