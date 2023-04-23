import React, { useState, useEffect } from "react";
import "../App.css"
import Item from "./Item"
import { Animated } from "react-animated-css";

function SearchBar(props) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  const [searchText, setSearchText] = useState("");

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearchClick() {
    // perform search using the searchText value
    props.onSearch(searchText);
  }

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (count > 1) {
      setShouldAnimate(true);
    }
  }, [count]);

  return (
    <div className="search-bar">
      <h2 className="animate__backInLeft">Enter Your Desired Anime/Movie</h2>
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
      <div className="button-container">
        <button className="buttons" onClick={handleIncrement}>Add Item</button>
        <button className="buttons" onClick={handleDecrement}>Delete Item</button>
      </div>
      <h2>Your List:</h2>
      {Array.from({ length: count }).map((_, index) => (
        <Animated
          key={index}
          animationIn={shouldAnimate ? "bounceIn" : ""}
        >
          <Item
            title="Naruto Shippuden"
            status="On-going"
            date="3 Days"
            imageSrc ="https://naruto-official.com/index/char_naruto.webp"
          />
        </Animated>
      ))}
    </div>
  );
}

export default SearchBar;
