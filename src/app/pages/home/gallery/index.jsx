"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import aboutMe from 'public/assets/aboutme.png'
import aboutMe1 from 'public/assets/aboutme1.png'
import aboutMe2 from 'public/assets/aboutme2.png'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Gallery() {
  return (
    <div className='px-4 bg-black mb-[-1px]'>
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      pagination={true} modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     className=' pt-5 mySwiper mt-[-1px] py-2'>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={aboutMe} alt='img'/></SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};