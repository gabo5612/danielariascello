"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function MobileMenu() {
  const context = useContext(Context);
  const heightWidht = "45";

  return (
    <div className="bg-primary-white/90 h-[100vh] w-4/5 fixed right-0 top-0 z-50">
      <div className="flex flex-col justify-evenly h-full">
        <div className="m-5 absolute right-0 top-0" onClick={()=> context.handleMenu()}>
          <Image
            src="/assets/menuClose.svg"
            alt="menu Close"
            width="35"
            height="35"
          />
        </div>
        <div className="flex flex-col justify-center gap-20 mr-20 md:mr-32 text-end font-lora text-3xl font-semibold">
          {!context.isHome && <Link href="/"  onClick={() => context.setIsHome(true)}>{context.text.home}</Link>}
          <Link href="/pages/biography" onClick={()=>context.setIsHome(false)}>{context.text.biography}</Link>
          <Link href="">{context.text.concerts}</Link>
          <Link  href="/pages/music"
            onClick={() => context.setIsHome(false)}>{context.text.musicTracks}</Link>
          <Link href="">{context.text.contactTitle}</Link>
        </div>
        <div className="flex justify-center gap-4">
          <Image src={context.spanish} alt="Spanish" height={heightWidht} width={heightWidht} onClick={()=> context.setLanguage(1)} />
          <Image src={context.german} alt="German" height={heightWidht} width={heightWidht} onClick={()=> context.setLanguage(3)}/>
          <Image src={context.french} alt="French" height={heightWidht} width={heightWidht} onClick={()=> context.setLanguage(2)}/>
          <Image src={context.english} alt="English" height={heightWidht} width={heightWidht} onClick={()=> context.setLanguage(0)}/>
        </div>
      </div>
    </div>
  );
}
