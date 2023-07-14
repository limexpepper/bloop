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
                <h2>{filteredItem.location}</h2>
                <p>{filteredItem.address}</p>
                <p>{filteredItem.rating}</p>
        </motion.div>
    )
}

export default Card
