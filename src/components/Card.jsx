import { motion } from "framer-motion";

function Card( {toilet} ) {
    return (
        <motion.div 
            Layout
            animate={ { opacity: 1 } }
            initial={ { opacity: 0 } }
            exit={ { opacity: 0 } }
            transition={ { duration: 0.5 } }
            className="card">
                <p className="tag">{toilet.location}</p>
                <p className="tag">{toilet.address}</p>
                <p className="tag">{toilet.rating}</p>
        </motion.div>
    )
}

export default Card
