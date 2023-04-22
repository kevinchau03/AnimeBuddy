import React, { useState } from "react";
import "../App.css"
import Item from "./Item"

function SearchBar(props) {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(count + 1);
  }

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
      <h2>Enter Your Desired Anime/Movie</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
        style={{
          width: '350px',
          borderRadius: '20px',
          padding: '10px',
          border: 'solid black',
          outline: 'none',
        }}
      />
      <button className="add-button" onClick={handleIncrement}>Add Item</button>
      <h2>Your List:</h2>
      {Array.from({ length: count }).map((_, index) => (
        <Item key={index} title={searchText} status="On-going" date="3 Days" imageSrc ="https://naruto-official.com/index/char_naruto.webp" />
      ))}
      
    </div>
  );
}

export default SearchBar