import { motion } from "framer-motion";
import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react"; // importing as per Swiper's documentation
// import { Navigation, Pagination, A11y } from "swiper/modules"; // importing as per Swiper's documentation
// //import 'swiper/swiper-bundle.min.css'; // see https://www.youtube.com/watch?v=KL_yIf5uiJo 13:54 to resolve swiper/css filepath issue
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import Review from "./Review";
// import Summary from "./Summary";

// function Card({ filteredItem }) {
//   // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   // Create an array of slides (filteredItem and Review) using map()
//   const slides = [
//     { type: 'item', content: <Summary filteredItem={filteredItem} /> },
//     { type: 'component', content: <Review id_entity={filteredItem.id_entity}/> },
//   ];

//   return (
//     <motion.div
//       layout
//       animate={{ opacity: 1 }}
//       initial={{ opacity: 0 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="card"
//     >
//       <Swiper
//         modules={[Navigation, Pagination, A11y]}
//         spaceBetween={0}
//         slidesPerView={1}
//          navigation
//         pagination={{ clickable: true }}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             {slide.content}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </motion.div>
//   );
// }

function Card({ filteredItem }) {
  const [isOpen, setIsOpen] = useState(false);  
  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      className="card"
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div layout="position" className="wrapper">
        <motion.div className="average-stars">{filteredItem.averagestars} stars</motion.div>
        <motion.div className="type">{filteredItem.type}</motion.div>
      </motion.div>
      <motion.div layout="position" className="place">{filteredItem.place}</motion.div>
      <motion.div layout="position" className="address">{filteredItem.address}</motion.div>
      

      {isOpen && 
        (
          <motion.div layout="position" className="expanded-section">
            <div className="rating-description">
              <p>{filteredItem.totalreviews} reviews till date</p>
            </div>
            <div className="qualities-description">
            </div>
            <Review /> 
          </motion.div>
          
        )
      } 
    
    
    </motion.div>
  );
}

export default Card;
