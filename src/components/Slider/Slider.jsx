// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useBrands from "../../hook/useBrands";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Slider = () => {

const [matchedProduct,setMatchedProduct] = useState()

const data = useBrands()
// console.log(data);

const {brandName} = useParams()
// console.log(brandName);

useEffect(()=>{
  const matchingProduct = data.find(item=> item.brand_name === brandName)
  setMatchedProduct(matchingProduct);
},[brandName, data])

// console.log(matchedProduct);


  return (
    <div className="z-0">
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
        className="mySwiper h-[50vh] md:h-[90vh] bg-contain z-0"
      >
        {/* <SwiperSlide><img className="object-cover" src="https://i.ibb.co/ZhCwzd1/m029t0090-b-black-friday-theme-24july23.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src="https://i.ibb.co/23xL51K/18899194.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src="https://i.ibb.co/59NGDND/5982167.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src="https://i.ibb.co/VHqTtJ9/8007688.jpg" alt="" /></SwiperSlide> */}
       
        <SwiperSlide><img className="object-contain" src={matchedProduct?.slider_image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-contain" src={matchedProduct?.slider_image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-contain" src={matchedProduct?.slider_image1} alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
