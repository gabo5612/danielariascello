'use client'
import useSound from 'use-sound';
import Image from 'next/image'
import { useState } from 'react';

export default function PlayButton() {


    const [play, {pause}] = useSound('/sounds/Faure.mp3');
      const [isPlaying, setIsPlaying]=useState(false)
   
      const handlePlaying=()=>{
        if(isPlaying){
          pause()
          setIsPlaying(!isPlaying)

      
        }else{
          play()
          setIsPlaying(!isPlaying)
  
        }
      }
  return (
    <div className='fixed bottom-6 right-4 z-50'>
      <button className='sticky' onClick={()=> handlePlaying()} >
        <Image width='75' height='75' src={isPlaying? '/assets/pause.svg' : '/assets/play.svg'} alt='play' />
      </button>
    </div>
  );
}
