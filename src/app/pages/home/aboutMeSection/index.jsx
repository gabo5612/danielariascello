"use client";
import { useContext } from "react";
import AboutMe from "../aboutMe";
import Gallery from "../gallery";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import aboutMe from "public/assets/aboutme.png";
export default function AboutMeSection() {
  const context = useContext(Context);
  return (
    <div className="flex flex-col bg-black w-full md:flex-row xl:py-24">
      <AboutMe />
      {context.matches ? (
        <div className="flex justify-center items-center w-[50%]">
          <Image alt="Daniel Arias" src={aboutMe} height="800" />
        </div>
      ) : (
        <Gallery />
      )}
    </div>
  );
}
