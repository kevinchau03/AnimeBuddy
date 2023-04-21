import React, { useState } from "react";
import "../App.css"

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearchClick() {
    // perform search using the searchText value
    props.onSearch(searchText);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
        style= {{ maxWidth: '300px' }}
      />
      <button 
      className="add-button"
      onClick={handleSearchClick}>Add to List
      </button>
    </div>
  );
}

export default SearchBar