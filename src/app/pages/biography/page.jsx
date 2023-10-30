'use client'
import Footer from "@/app/components/footer";
import NavBar from "@/app/components/navBar";
import HeaderBio from "./sections/HeaderBio";
import TextBio from "./sections/TextBio";
import GalleryBio from "./sections/GalleryBio";


export default function Biography() {
  return (
    <>
    <NavBar/>
    <HeaderBio/>
    <TextBio/>
    <GalleryBio/>
    <Footer/>
   </>
  )
}
