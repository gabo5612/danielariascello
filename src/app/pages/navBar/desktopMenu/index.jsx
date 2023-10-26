'use client'
import { Context } from "@/app/hooks/hook"
import Image from "next/image";
import Link from "next/link";
import { useContext } from 'react';

export default function DesktopMenu() {
    const context = useContext(Context);
  return (
    <div>
        <div>{context.isHome && <span>Daniel Arias</span>}</div>
        <div>{context.isHome &&<Link href=''>{context.text.home}</Link>}
            <Link href=''>{context.text.biography}</Link>
            <Link href=''>{context.text.concerts}</Link>
            <Link href=''>{context.text.musicTracks}</Link>
            <Link href=''>{context.text.contactTitle}</Link>
            <Image src={context.languageImg} alt='' height='25' width='25'/>
        </div>
    </div>
  )
}
