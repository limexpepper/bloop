import {useEffect} from 'react'

function Filter({items, setFilteredItems, activeFilter, setActiveFilter}) {
  useEffect(() => {
    if (activeFilter === "all"){
      setFilteredItems(items)
      return 
    }
    
    const filtered = items.filter((item) => 
      item.type.toString().includes(activeFilter) /* accessing the 'type' column in the toilets table */
    )
    setFilteredItems(filtered)
  }, [activeFilter])  
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