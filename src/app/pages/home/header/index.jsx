"use client"
import { useContext } from 'react';
import { Context } from '@/app/hooks/hook';

import PlayButton from '@/app/components/playButton';
import NavBar from '../../../components/navBar';

export default function Header(){
    const context=useContext(Context)
    return (
        <div className="h-screen w-full " onLoad={()=>context.setIsHome(true)}>
            <video  autoPlay={true} loop muted className=' w-full h-full object-cover z-0'> 
                <source src='public/assets/Video.mp4' type='video/mp4'/>
                <div className=' w-full h-full  flex justify-center items-center flex-col absolute top-0 z-10'>
                    <div className='w-10/10'>
                    <h1 className="text-5xl text-center text-white font-cinzel text-shadow-md drop-shadow-xl custom-shadow-text ">Daniel Arias</h1>
                    <h2 className='text-end text-6xl text-shadow-md  font-corinthia text-secunday custom-shadow-text'>Cello</h2>
                    </div>
                 
                </div>
                
              <NavBar/>
             
              </video>
        </div>
    );
}
