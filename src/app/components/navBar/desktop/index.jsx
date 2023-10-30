"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function DesktopMenu() {
  const context = useContext(Context);
  const widthHeightDesktop = "25";
  /* poner las 4 opciones y desaparecer la principal*/
  const languagePools = context.languagePool.map((languagePool) => (
    <Image
      key={languagePool}
      alt=""
      src={languagePool}
      height={widthHeightDesktop}
      width={widthHeightDesktop}
      onClick={() => context.handleLanguagePool(languagePool)}
      className="cursor-pointer"
    />
  ));
  return (
    <div className="absolute top-0 right-0 w-full">
      <div className="flex items-start justify-between">
        <div>
          {!context.isHome && (
            <h1 className="text-white text-start font-cinzel text-5xl mx-4 my-2">
              Daniel Arias
            </h1>
          )}
        </div>
        <div className="flex items-start font-lora text-primary-white gap-8 m-4">
          {!context.isHome && <Link href="/">{context.text.home}</Link>}
          <Link
            href="/pages/biography"
            onClick={() => context.setIsHome(false)}
          >
            {context.text.biography}
          </Link>
          <Link href="">{context.text.concerts}</Link>
          <Link href="">{context.text.musicTracks}</Link>
          <Link href="">{context.text.contactTitle}</Link>
          <div
            onMouseOver={() => context.setOpenLanguage(true)}
            onMouseLeave={() => context.setOpenLanguage(false)}
          >
            {!context.openLanguage && (
              <Image
                src={context.languageImg}
                alt=""
                height={widthHeightDesktop}
                width={widthHeightDesktop}
                className="cursor-pointer"
              />
            )}
            {context.openLanguage && (
              <div className="flex gap-2 flex-col">{languagePools}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
