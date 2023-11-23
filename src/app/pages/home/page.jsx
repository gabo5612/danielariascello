
import Footer from "../../components/footer";
import AboutMeSection from "./aboutMeSection";
import Concerts from "./concerts";
import ContactForm from "./contactForm";
import Header from "./header";
import Video from "./video";

export default function Home() {
  return (
    <>
      <Header/>
      <AboutMeSection />
      <Video />
      <Concerts />
      <ContactForm />
      <Footer />
    </>
  );
}
