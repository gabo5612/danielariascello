"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import aboutMe from 'public/assets/aboutme.png'
import aboutMe1 from 'public/assets/aboutme1.png'
import aboutMe2 from 'public/assets/aboutme2.png'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { Context } from '@/app/hooks/hook';

export default function Gallery() {
  const context=useContext(Context)
  return (
    <div className='px-4 bg-black mb-[-1px] md:w-1/2 '>
    <Swiper
      spaceBetween={5}
      slidesPerView={context.matches? 1:3}
      pagination={false} modules={[Pagination]}
     className=' pt-5 mySwiper mt-[-1px] py-2'>
      <SwiperSlide><Image className='w-full md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[700px]' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[700px]' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[700px]' src={aboutMe} alt='img'/></SwiperSlide>
      <SwiperSlide><Image className='w-full md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[700px]' src={aboutMe} alt='img'/></SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};