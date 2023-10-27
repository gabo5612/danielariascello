
import Footer from './pages/footer'
import AboutMe from './pages/home/aboutMe'
import AboutMeSection from './pages/home/aboutMeSection'
import Concerts from './pages/home/concerts'
import ContactForm from './pages/home/contactForm'
import Gallery from './pages/home/gallery'

import Header from './pages/home/header'
import Video from './pages/home/video'
import MobileMenu from './pages/navBar/mobileMenu'

export default function Home() {
  return (
    <>
   <Header/>
   <AboutMeSection/>
    <Video/>
    <Concerts/>
    <ContactForm/>
    <Footer/>

    </>
   
  )
}
