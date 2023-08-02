import Card from '../components/Card'
import Filter from '../components/Filter'
import Search from '../components/Search';
import supabase from '../supabase'
import React from 'react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Sparkles from '../components/Sparkles/Sparkles';

function Home() {
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [activeFilter, setActiveFilter] = useState("unselected")
    const [searchTerm, setSearchTerm] = useState("");
    var filterSelected = false;

    const fetchData = async () => {
        const { data } = await supabase
        .from('entities')
        .select()

        setItems(data) 
        setFilteredItems(data)
        //console.log("data from supabase: ", data)
    }

    useEffect(() => {
        //console.log('Effect is running');
        fetchData();
    }, [])
    
  return (
    <>
        <div className="welcomeMessage">Find and rate toilets</div>
        <div className="search-filter-wrapper">
            <Search items={items} setFilteredItems={setFilteredItems} activeFilter={activeFilter} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Filter items={items} setFilteredItems={setFilteredItems} activeFilter={activeFilter} setActiveFilter={setActiveFilter} searchTerm={searchTerm}/>
        </div>
        <motion.div layout className="cards">
            <AnimatePresence>
            {filteredItems.map( (filteredItem) => (
                <Card key={filteredItem.id_entity} filteredItem={filteredItem} />
            ))}
            </AnimatePresence>
        </motion.div>
    </>
  )
}

export default Home

/*
*** In javascript, there are functions such as filter() and map(). 
*** What sort of functions are these?

In JavaScript, the functions filter and map are higher-order functions that operate on arrays. 
They are part of the built-in array methods and provide a convenient way to manipulate and transform array elements.

To use filter() and map(), you need to pass in a callback function. 
This callback function will be used by filter() and map() on each element in the original array
Note that the callback function is code which you write. In other words,the callback function tells filter() and map() how to treat each element in the original array

For example, The filter function takes the original array [1, 2, 3, 4, 5] and the callback function 
It starts examining each element of the original array, starting from the first element (1).
For each element, it calls the callback function and passes the element as an argument (e.g., callback(1)).
*/