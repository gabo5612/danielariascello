"use client"
import { Context } from '@/app/hooks/hook';
import { useContext } from 'react';

const AboutMe = () => {
    const context = useContext(Context);
    return (
        <div className='text-white bg-black text-center flex flex-col md:w-1/2 md:justify-evenly items-center bg-gradient-radial from-gradiant1 from-5% via-gradiant2 via-45% to-gradiant3 to-20%'>
            <h3 className='pt-12 text-2xl md:text-3xl'>{context.text.aboutMe}</h3>
            <p className='py-6 w-10/12 text-justify md:w-3/5'>{context.text.aboutMeText}</p>
            <button className='mb-5 px-10 py-4 rounded-lg bg-white text-black text-xl font-bold'>{context.text.aboutMeButton}</button>
        </div>
    );
}

export default AboutMe;
