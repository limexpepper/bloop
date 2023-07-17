import { motion } from "framer-motion";

function Card( {filteredItem} ) {
    console.log(filteredItem);
    return (
        <motion.div 
            Layout
            animate={ { opacity: 1 } }
            initial={ { opacity: 0 } }
            exit={ { opacity: 0 } }
            transition={ { duration: 0.5 } }
            className="card">
                <div className="photo"></div>
                <div className="rating"><p>{filteredItem.rating}</p></div>
                <div className="review-count"><p>Based on xx reviews</p></div>
                <div className="location"><h2>{filteredItem.location}</h2></div>
                <div className="swiper-wrapper">
                    <div className="swiper"></div>   
                    <div className="swiper"></div>             
                </div>
        </motion.div>
    )
}

export default Card
