'use client'
import useSound from 'use-sound';
import Image from 'next/image'
import { useState } from 'react';
export default function PlayButton() {

    const [playbackRate, setPlaybackRate] = useState(0.75);

    const [play, forceSoundEnabled] = useSound('/sounds/Faure.mp3', { playbackRate});
 
  return (
    <div className='fixed bottom-6 right-6'>
      <button className='sticky' onLoadStart={play()}>
        <Image width='100' height='100' src='/assets/play.svg' alt='play' />
      </button>
    </div>
  );
}
