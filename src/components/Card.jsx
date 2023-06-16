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
                <h2 className="tag">{toilet.location}</h2>
                <p className="tag">{toilet.address}</p>
                <p className="tag">{toilet.rating}</p>
        </motion.div>
    )
}

export default Card
