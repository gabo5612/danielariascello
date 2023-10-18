"use client"
import { Context } from '@/app/hooks/hook';
import { useContext } from 'react';

const AboutMe = () => {
    const context = useContext(Context);
    return (
        <div className='text-white bg-black text-center flex flex-col items-center bg-gradient-radial from-gradiant1 from-30% via-gradiant2 via-80% to-gradiant3 to-30%'>
            <h3 className='pt-12 text-2xl'>{context.text.aboutMe}</h3>
            <p className='py-5 w-10/12 text-justify'>{context.text.aboutMeText}</p>
            <button className='mb-5 px-10 py-5 rounded-lg bg-white text-black text-xl font-bold'>{context.text.aboutMeButton}</button>
        </div>
    );
}

export default AboutMe;
