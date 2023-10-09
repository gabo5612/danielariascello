"use client"
import { useContext } from 'react';
import { Context } from '@/app/hooks/hook';
import 'tailwindcss/tailwind.css';

export default function Header(){
    const context=useContext(Context)
    return (
        <div className="h-screen bg-headerDesktop bg-cover bg-no-repeat bg-center flex justify-center items-center" >
                <div className='text-white '>
                    <h1 className="text-4xl drop-shadow-md">Daniel Arias</h1>
                    <h2 className='text-end text-xl drop-shadow-md'>{context.text.instrument}</h2>
                </div>
        </div>
    );
}
