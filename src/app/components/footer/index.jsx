"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Footer() {
  const context = useContext(Context);
  return (
    <div className="bg-footerBg bg-cover bg-bottom h-[70dvh] mt-[-2px] lg:h-[50dvh]">
      <div className="bg-dark/80 h-full">
        <div className="bg-gradient-to-b from-gradiant2  h-[15dvh]"></div>
        <div className="flex flex-col justify-between h-4/6">
          <div className=" flex flex-col gap-6 lg:flex-row justify-around">
            <div className="flex flex-col ">
            <h2 className="text-5xl text-center text-white font-cinzel text-shadow-md lg:text-6xl ">
              Daniel Arias
            </h2>
            <h3 className="text-center text-6xl text-shadow-md  font-corinthia text-secunday lg:text-7xl">
              Cello
            </h3>
            <div className="flex justify-center items-center gap-4">
              <a href="#" className="cursor-pointer">
                <Image
                  src="/assets/youtube.svg"
                  alt=""
                  width={35}
                  height={35}
                  loading="lazy"
                />
              </a>
              <a href="#" className="cursor-pointer">
                <Image
                  src="/assets/ig.svg"
                  alt=""
                  width={25}
                  height={25}
                  loading="lazy"
                />
              </a>
              <a href="#" className="cursor-pointer">
                <Image
                  src="/assets/fb.svg"
                  alt=""
                  width={25}
                  height={25}
                  loading="lazy"
                />
              </a>
              <a href="#" className="cursor-pointer">
                <Image
                  src="/assets/tiktok.svg"
                  alt=""
                  width={25}
                  height={25}
                  loading="lazy"
                />
              </a>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-primary-white font-lora text-l lg:text-xl">
              <Link href="/pages/biography" onClick={()=>context.setIsHome(false)}>{context.text.biography}</Link>
              <Link href="/concerts">{context.text.concerts}</Link>
              <Link href="/music">{context.text.musicTracks}</Link>
              <Link href="/contactMe">{context.text.contactTitle}</Link>
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 text-primary-white font-lora text-xs lg:text-lg">
            <Link href="/terms">{context.text.termOfUse}</Link>
            <Link href="/privatePolicy">{context.text.privatePolicy}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
