"use client"
import { useContext } from 'react';
import { Context } from '@/app/hooks/hook';
import 'tailwindcss/tailwind.css';
import PlayButton from '@/app/components/playButton';
import NavBar from '../../../components/navBar';

export default function Header(){
    const context=useContext(Context)
    return (
        <div className="h-screen bg-headerDesktop bg-cover bg-no-repeat bg-center lg: bg-inherit" onLoad={()=>context.setIsHome(true)}>
                <div className='bg-dark/40 w-full h-full   flex justify-center items-center flex-col'>
                    <div className='w-10/10'>
                    <h1 className="text-5xl text-center text-white font-cinzel text-shadow-md drop-shadow-xl custom-shadow-text">Daniel Arias</h1>
                    <h2 className='text-end text-6xl text-shadow-md  font-corinthia text-secunday custom-shadow-text'>Cello</h2>
                    </div>
                   
                </div>
              <NavBar/>
               
                
        </div>
    );
}
