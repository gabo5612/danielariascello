"use client"
import { useContext } from 'react';
import { Context } from '@/app/hooks/hook';
import 'tailwindcss/tailwind.css';
import PlayButton from '@/app/playButton';
import NavBar from '../../navBar';

export default function Header(){
    const context=useContext(Context)
    return (
        <div className="h-screen bg-headerDesktop bg-cover bg-no-repeat bg-center lg: bg-inherit" >
                <div className='bg-dark/40 w-full h-full   flex justify-center items-center flex-col'>
                    <div className='w-10/10'>
                    <h1 className="text-5xl text-center text-white font-cinzel text-shadow-md drop-shadow-xl ">Daniel Arias</h1>
                    <h2 className='text-end text-6xl text-shadow-md  font-corinthia text-secunday '>Cello</h2>
                    </div>
                   
                </div>
              <NavBar/>
               
                {!context.menuIsOpen && <PlayButton/>}
                
        </div>
    );
}
