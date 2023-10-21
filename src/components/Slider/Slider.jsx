// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[50vh] md:h-[85vh] contain z-0"
      >
        <SwiperSlide><img className="object-cover" src="https://i.ibb.co/ZhCwzd1/m029t0090-b-black-friday-theme-24july23.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src="https://i.ibb.co/23xL51K/18899194.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src="https://i.ibb.co/59NGDND/5982167.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src="https://i.ibb.co/VHqTtJ9/8007688.jpg" alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Slider;
