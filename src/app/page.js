
import Footer from './pages/footer'
import AboutMe from './pages/home/aboutMe'
import Concerts from './pages/home/concerts'
import ContactForm from './pages/home/contactForm'
import Gallery from './pages/home/gallery'

import Header from './pages/home/header'
import Video from './pages/home/video'

export default function Home() {
  return (
    <>
   <Header/>
   <AboutMe/>
    <Gallery/>
    <Video/>
    <Concerts/>
    <ContactForm/>
    <Footer/>

    </>
   
  )
}
