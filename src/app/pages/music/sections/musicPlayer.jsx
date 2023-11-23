'use client'
import { Context } from '@/app/hooks/hook';
import Image from 'next/image';
import { useContext, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS


export default function MusicPlayer() {
    const context = useContext(Context);
    const [currentTrack, setTrackIndex] = useState(0)
    const handleClickNext = () => {
        console.log('click next')
          setTrackIndex((currentTrack) =>
              currentTrack < playList.length - 1 ? currentTrack + 1 : 0
          );
      };
    
    const handleEnd = () => {
      console.log('end')
      setTrackIndex((currentTrack) =>
              currentTrack < playList.length - 1 ? currentTrack + 1 : 0
          );
    }
    const playList = [
        { src: '/sounds/Faure.mp3', img: '/assets/aboutme.png' , title:'cancion 1'},
        { src: '/sounds/Faure.mp3', img: '/assets/aboutme1.png' , title:'cancion 2' },
        { src: '/sounds/Faure.mp3', img: '/assets/aboutme2.png' , title:'cancion 3'},
      ]

      
    const Player = () => (
        <AudioPlayer
          
          src={playList[currentTrack].src}
          onPlay={e => console.log("onPlay")}
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          // other props here
        />
      );
  return (
    <div><span>{playList[currentTrack].title}</span>
        <Image alt='nada' src={playList[currentTrack].img} height='400' width='400'/>
        <Player/></div>
  )
}
