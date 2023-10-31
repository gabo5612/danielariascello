import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import aboutMe from '/public/assets/aboutme.png'


export default function App() {
  return (
    <>
     
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper bg-primary-black">
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
        <SwiperSlide><Image src={aboutMe} height='250' width='250' alt='alt'/></SwiperSlide>
      </Swiper>
    </>
  );
}
