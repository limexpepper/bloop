import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"; // importing as per Swiper's documentation
import { Navigation, Pagination, A11y } from "swiper/modules"; // importing as per Swiper's documentation
//import 'swiper/swiper-bundle.min.css'; // see https://www.youtube.com/watch?v=KL_yIf5uiJo 13:54 to resolve swiper/css filepath issue
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Review from "./Review";

import { useState } from "react";

function Card({ filteredItem }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Create an array of slides (filteredItem and Review) using map()
  const slides = [
    {
      type: 'item',
      content: (
        <div>
          <p>{filteredItem.rating}</p>
          <p>{filteredItem.location}</p>
          <p>{filteredItem.address}</p>
        </div>
      ),
    },
    { type: 'component', content: <Review /> },
  ];

  return (
    <motion.div
      Layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
         navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default Card;
