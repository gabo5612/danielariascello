"use client"
import { Context } from '@/app/hooks/hook';
import { useContext } from 'react';

const AboutMe = () => {
    const context = useContext(Context);
    return (
        <div className='text-white bg-black text-center flex flex-col items-center'>
            <h3 className='pt-12 text-2xl'>{context.text.aboutMe}</h3>
            <p className='py-5 w-10/12 text-justify'>{context.text.aboutMeText}</p>
            <button className='mb-5 px-12 py-6 rounded-lg bg-white text-black text-xl font-bold'>{context.text.aboutMeButton}</button>
        </div>
    );
}

export default AboutMe;
