import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BoxItem from "./StudentCard";
import { RiDownloadLine } from "react-icons/ri";
import HideGroup from "./HideText";
import PassportPage from "./Passport";
import StudentCardPage from "./StudentCard";
import IdentityCardPage from "./Vesiqe";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ hideOnClick: true, enabled: true }}
      scrollbar={{ hide: true, enabled: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <PassportPage />
      </SwiperSlide>
      <SwiperSlide>
        <StudentCardPage />
      </SwiperSlide>
      <SwiperSlide>
        <IdentityCardPage />
      </SwiperSlide>
      
    </Swiper>
  );
};
