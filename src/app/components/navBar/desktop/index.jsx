"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function DesktopMenu() {
  const context = useContext(Context);
 


  return (
    <div className="absolute top-0 right-0 w-full z-50">
      <div className="flex items-start justify-between">
        <div>
          {!context.isHome && (
            <h1 className="text-white text-start font-cinzel text-5xl mx-4 my-2">
              Daniel Arias
            </h1>
          )}
        </div>
        <div className="flex items-start font-lora text-primary-white gap-8 m-4">
          {!context.isHome && (
            <Link href="/" onClick={()=>context.setIsHome(true)}>
              {context.text.home}
            </Link>
          )}
          <Link
            href="/pages/biography"
            onClick={context.setIsHome(false)}
          >
            {context.text.biography}
          </Link>
          <Link href="">{context.text.concerts}</Link>
          <Link href="/pages/music" onClick={context.setIsHome(false)}>
            {context.text.musicTracks}
          </Link>
          <Link href="">{context.text.contactTitle}</Link>
          <div
            onMouseOver={context.setOpenLanguage(true)}
            onMouseLeave={context.setOpenLanguage(false)}
            className="z-50">
            {!context.openLanguage && (
              <Image
                src={context.languageImg}
                alt=""
                height={25}
                width={25}
                className="cursor-pointer z-50"
              />
            )}
            {context.openLanguage && (
              <div className="flex gap-2 flex-col">{context.languagePools}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
