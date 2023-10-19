
import AboutMe from './pages/home/aboutMe'
import Concerts from './pages/home/concerts'
import ContactForm from './pages/home/contactForm'
import Gallery from './pages/home/gallery'

import Header from './pages/home/header'

export default function Home() {
  return (
    <>
   <Header/>
   <AboutMe/>
    <Gallery/>
    <Concerts/>
    <ContactForm/>
    </>
   
  )
}
