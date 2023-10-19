'use client'
import { Context } from "@/app/hooks/hook";
import { useContext } from "react";


export default function Footer() {
    const context = useContext(Context);
  return (
    <div className='bg-footerBg bg-cover bg-bottom h-[70vh]'>
        <div className='bg-dark/80 h-full'>
        <div className='bg-gradient-to-b from-gradiant2  h-[15vh]'></div>
        <div>
            <h2 className="text-5xl text-center text-white font-cinzel text-shadow-md ">Daniel Arias</h2>
            <h3 className='text-end text-6xl text-shadow-md  font-corinthia text-secunday '>Cello</h3>
            <div>
                Imagedsd
            </div>
        </div>
        </div>
    </div>
  )
}
