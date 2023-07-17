import {useEffect} from 'react'

function Filter({items, setFilteredItems, activeFilter, setActiveFilter, searchTerm}) {
  useEffect(() => {
    if (activeFilter === "all"){
      setFilteredItems(items)
      return 
    }
    
    const filtered = items.filter((item) => {
        if (searchTerm === "" && item.type.toString().includes(activeFilter)) {
          return true;
        } else if (item.location.toString().toLowerCase().includes(searchTerm.toLowerCase()) && item.type.toString().includes(activeFilter)){
          return true;
        } else if (item.address.toString().toLowerCase().includes(searchTerm.toLowerCase()) && item.type.toString().includes(activeFilter)){
          return true;
        }
        return false;
      }
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