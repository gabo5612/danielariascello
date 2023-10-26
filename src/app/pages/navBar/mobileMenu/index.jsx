"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function MobileMenu() {
  const context = useContext(Context);
  const us = "/assets/us.svg";
  const german = "/assets/german.svg";
  const spain = "/assets/spain.svg";
  const france = "/assets/france.svg";
  const height = "45";
  const width = "45";
  return (
    <div className="bg-primary-white/90 h-[100vh] w-4/5 fixed right-0 top-0 z-20">
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
          <Link href="">{context.text.biography}</Link>
          <Link href="">{context.text.concerts}</Link>
          <Link href="">{context.text.musicTracks}</Link>
          <Link href="">{context.text.contactTitle}</Link>
        </div>
        <div className="flex justify-center gap-4">
          <Image src={spain} alt="spain" height={height} width={width} />
          <Image src={german} alt="german" height={height} width={width} />
          <Image src={france} alt="france" height={height} width={width} />
          <Image src={us} alt="us" height={height} width={width} />
        </div>
      </div>
    </div>
  );
}
