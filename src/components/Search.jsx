import React, { useState, useEffect } from 'react';
import Card from './Card';

function Search({ items, setFilteredItems, activeFilter }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      if (searchTerm === '') {
        return true;
      } else if (item.location.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
          if (activeFilter === "mall" && item.type.toString() === "mall"){
            return true
          } else if (activeFilter === "cafe" && item.type.toString() === "cafe"){
            return true
          } else if (activeFilter === "attraction" && item.type.toString() === "attraction"){
            return true
          } else if (activeFilter === "unselected"){
            return true
          }
      } else if (item.address.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        if (activeFilter === "mall" && item.type.toString() === "mall"){
          return true
        } else if (activeFilter === "cafe" && item.type.toString() === "cafe"){
          return true
        } else if (activeFilter === "attraction" && item.type.toString() === "attraction"){
          return true
        } else if (activeFilter === "unselected"){
          return true
        }
      }
      return false;
    });
    setFilteredItems(filteredItems);
  }, [searchTerm, activeFilter]);

  return (
    <div className="Search">
      <input type="text" placeholder="Search..." onChange={(event) => setSearchTerm(event.target.value)} />
    </div>
  );
}

export default Search;
