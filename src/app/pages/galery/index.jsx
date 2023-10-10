"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import aboutMe from 'public/assets/aboutme.png'
import aboutMe1 from 'public/assets/aboutme1.png'
import aboutMe2 from 'public/assets/aboutme2.png'
// Import Swiper styles
import 'swiper/css';

export default function Galery() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='w-full h-full'><Image src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide className='w-full h-full'><Image src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide className='w-full h-full'><Image src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide className='w-full h-full'><Image src={aboutMe} alt='img'/></SwiperSlide>
      ...
    </Swiper>
  );
};