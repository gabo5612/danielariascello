"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import aboutMe from 'public/assets/aboutme.png'
import aboutMe1 from 'public/assets/aboutme1.png'
import aboutMe2 from 'public/assets/aboutme2.png'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Galery() {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      pagination={true} modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     className='bg-black pt-5 mySwiper'>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      ...
    </Swiper>
  );
};