"use client";
import { Context } from "@/app/hooks/hook";
import Image from "next/image";
import { useContext, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MusicPlayer() {
  const context = useContext(Context);
  const [currentTrack, setTrackIndex] = useState(0);

  const playList = [
    {
      src: "/sounds/Faure.mp3",
      img: "/assets/aboutme.png",
      title: context.text.song1,
    },
    {
      src: "/sounds/Faure.mp3",
      img: "/assets/aboutme1.png",
      title: context.text.song2,
    },
    {
      src: "/sounds/Faure.mp3",
      img: "/assets/aboutme2.png",
      title: context.text.song3,
    },
  ];

  const Player = () => (
    <AudioPlayer
      showSkipControls
      showFilledVolume
      src={playList[currentTrack].src}
      onPlay={() => console.log("onPlay")}
      onClickNext={handleClickNext}
      onEnded={handleEnd}
      className="rounded-lg"
    />
  );

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playList.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playList.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleSlideChange = (swiper) => {
    setTrackIndex(swiper.activeIndex);
  };

  return (
    <div className="bg-primary-black flex flex-col items-center justify-center py-12">
      <div className="flex items-center flex-col font-lora text-primary-white font-bold gap-4">
        <div className="w-[250px]">
          <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
   
            watchSlidesProgress
        
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {playList.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  alt="nada"
                  src={item.img}
                  height="500"
                  width="500"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <span className="text-5xl">{playList[currentTrack].title}</span>
        <span className="text-xl">Daniel Arias</span>
      </div>
      <div className="w-full mt-4 md:max-w-lg">
        <Player />
      </div>
    </div>
  );
}
