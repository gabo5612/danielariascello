import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import aboutMe from '/public/assets/aboutme.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function GalleryBio() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper bg-primary-black"
      >
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image height='250' width='250' alt='gallery' src={aboutMe}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
