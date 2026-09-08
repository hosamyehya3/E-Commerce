
'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

type Slidertype = {
spaceBetween : number ,
slidesPerView : number ,
pageList : string[]
}

export default function Slider({spaceBetween , slidesPerView ,pageList }:Slidertype) {
  return (
    <div className='container mx-auto'>

   <Swiper
    loop={true}
     modules={[Navigation, Pagination]}
       navigation
      pagination={{ clickable: true  }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      
          {pageList.map((src)=>     <SwiperSlide> <Image className='w-full h-80 rounded-3xl' height={400} width={400} src={src} alt="Blog image 1" /></SwiperSlide> )}
    
      

    </Swiper>

    </div>
 
  );
}