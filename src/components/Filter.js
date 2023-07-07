import {useEffect} from 'react'

function Filter({toilets, setFilteredToilets, activeFilter, setActiveFilter}) {
  useEffect(() => {
    if (activeFilter === "all"){
      setActiveFilter("all")
      return
    }
    
    const filtered = toilets.filter((toilet) => 
      toilet.type.toString().includes(activeFilter)
    )
    setFilteredToilets(filtered);
  }, [activeFilter]);  
  return (
    <div className="filter">
        <button 
          className={ activeFilter === "all" ? "active" : ""}
          onClick={() => setActiveFilter("all")}>All
        </button>
        <button 
          className={ activeFilter === "mall" ? "active" : ""}
          onClick={() => setActiveFilter("mall")}>Malls
        </button>
        <button 
          className={ activeFilter === "cafe" ? "active" : ""}
          onClick={() => setActiveFilter("cafe")}>Cafes
        </button>
        <button 
          className={ activeFilter === "attraction" ? "active" : ""}
          onClick={() => setActiveFilter("attraction")}>Attractions
        </button>
    </div>
  )
}

export default Filter