'use client'
import Image from 'next/image'
import { useContext } from 'react';
import { Context } from '../hooks/hook';

export default function PlayButton() {
  const context = useContext(Context);
     
  return (
    <div className='fixed bottom-6 right-4 z-50'>
      <button className='sticky' onClick={()=> context.handlePlaying()} >
        <Image width='75' height='75' src={context.isPlaying? '/assets/pause.svg' : '/assets/play.svg'} alt='play' className={!context.isPlaying && 'animate-bounce ease-in-out'}/>
      </button>
    </div>
  );
}
