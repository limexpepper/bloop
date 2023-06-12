import Card from '../components/Card'
import supabase from '../supabase'
import React from 'react'
import { useEffect, useState } from 'react'

function Home() {
    const [toilets, setToilets] = useState([])
    const fetchData = async () => {
        const { data } = await supabase
        .from('toilets')
        .select()

        setToilets(data) 
        console.log("data from supabase: ", data)
    }

    useEffect(() => {
        console.log('Effect is running');
        fetchData();
    }, [])
    
  return (
    <div className="toiletCards">
        {toilets.map( toilet => (
            <Card key={toilet.id} toilet={toilet} />
        ))}
        
    </div>
  )
}

export default Home