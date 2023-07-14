import React, { useState, useEffect } from 'react';
import Card from './Card';

function Search({ items, setFilteredItems }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      if (searchTerm === '') {
        return true;
      } else if (item.location.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      } else if (item.address.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
    setFilteredItems(filteredItems);
  }, [searchTerm]);

  return (
    <div className="Search">
      <input type="text" placeholder="Search..." onChange={(event) => setSearchTerm(event.target.value)} />
    </div>
  );
}

export default Search;
