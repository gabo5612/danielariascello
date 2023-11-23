'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Test =()=>  {
 
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image
          alt="nada"
          src='/assets/aboutme.png'
          height="500"
          width="500"
        /></SwiperSlide>
      <SwiperSlide><Image
          alt="nada"
          src='/assets/aboutme.png'
          height="500"
          width="500"
        /></SwiperSlide>
      <SwiperSlide><Image
          alt="nada"
          src='/assets/aboutme.png'
          height="500"
          width="500"
        /></SwiperSlide>
    </Swiper>
  
};
<Image
alt="nada"
src={playList[currentTrack].img}
height="500"
width="500"
/>