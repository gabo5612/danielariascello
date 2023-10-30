import Footer from "../../components/footer";
import AboutMeSection from "../../pages/home/aboutMeSection";
import Concerts from "../../pages/home/concerts";
import ContactForm from "../../pages/home/contactForm";
import Header from "../../pages/home/header";
import Video from "../../pages/home/video";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMeSection />
      <Video />
      <Concerts />
      <ContactForm />
      <Footer />
    </>
  );
}
