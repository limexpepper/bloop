import Card from '../components/Card'
import Filter from '../components/Filter'
import supabase from '../supabase'
import React from 'react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

function Home() {
    const [toilets, setToilets] = useState([])
    const [filteredToilets, setFilteredToilets] = useState([])
    const [activeFilter, setActiveFilter] = useState("unselected")

    const fetchData = async () => {
        const { data } = await supabase
        .from('toilets')
        .select()

        setToilets(data) 
        setFilteredToilets(data)
        //console.log("data from supabase: ", data)
    }

    useEffect(() => {
        //console.log('Effect is running');
        fetchData();
    }, [])
    
  return (
    <div className="Home">
        <Filter toilets={toilets} setFilteredToilets={setFilteredToilets} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <motion.div Layout className="toiletCards">
            <AnimatePresence>
            {filteredToilets.map( toilet => (
                <Card key={toilet.id} toilet={toilet} />
            ))}
            </AnimatePresence>
        </motion.div>
    </div>
  )
}

export default Home