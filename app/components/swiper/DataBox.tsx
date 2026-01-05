import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BoxItem from './BoxItem';

export default () => {
  return (
    <Swiper
   
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><BoxItem/></SwiperSlide>
      <SwiperSlide><BoxItem/></SwiperSlide>
      <SwiperSlide><BoxItem/></SwiperSlide>
      ...
    </Swiper>
  );
};