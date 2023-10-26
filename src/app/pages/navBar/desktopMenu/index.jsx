"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function DesktopMenu() {
  const context = useContext(Context);
  const widthHeightDesktop='25'

  const languagePools = context.languagePool.map((languagePool)=>(
    <Image key={languagePool} alt="" src={languagePool} height={widthHeightDesktop} width={widthHeightDesktop} onClick={()=>context.handleLanguagePool(languagePool)} className="cursor-pointer"/>
  ))
  return (
    <div className="absolute top-0 right-0">
      <div className="flex items-center">
        <div>{!context.isHome && <span>Daniel Arias</span>}</div>
        <div className="flex items-center font-lora text-primary-white gap-8 m-4">
          {!context.isHome && <Link href="/">{context.text.home}</Link>}
          <Link href="">{context.text.biography}</Link>
          <Link href="">{context.text.concerts}</Link>
          <Link href="">{context.text.musicTracks}</Link>
          <Link href="">{context.text.contactTitle}</Link>
          <Image src={context.languageImg} alt="" height={widthHeightDesktop} width={widthHeightDesktop}  className="cursor-pointer"/>
          <div >{languagePools}</div>
        </div>
      </div>
    </div>
  );
}
