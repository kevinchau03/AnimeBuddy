import React, { useState, useEffect } from "react";
import "../App.css";
import {Animated} from 'react-animated-css';
import axios from "axios";
import Item from "./Item.js";

function SearchBar(props) {
  const [count, setCount] = useState(1);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count > 1) {
      setShouldAnimate(true);
    }
  }, [count]);

  function handleInputChange(event) {
    const value = event.target.value;
    setSearchText(value);
  }

  async function handleSearchClick() {
    try {
      const response = await axios.get(`https://myanimelist.p.rapidapi.com/anime/${searchText}`, {
        headers: {
          'X-RapidAPI-Key': '8d6c2faa3dmsh922150c5e564f61p1c755ajsn0fa40da5fcd0',
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
      });
      console.log(response.data)
      const newResult = {
        title: response.data.title_ov,
        status: "On-going",
        date: "3 Days",
        imageSrc: response.data.picture_url
      };
      setResults([...results, newResult]);
      setSearchText("");
    } catch (error) {
      console.log("ERROR!")
    }
  }
  
  
  return (
    <div className="search-bar">
      <h3>Enter Your Desired Anime/Movie</h3>
      <input
        type="text"
        placeholder="Ex. Naruto Shippuden"
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
      <button className="buttons" onClick={handleSearchClick}>Search</button>
      <h3>Your Awesome Anime List:</h3>
      {results.map((result, index) => (
  <Animated
    key={index}
    animationIn={shouldAnimate ? "bounceIn" : ""}
  >
    <Item
      title={result.title}
      status={result.status}
      date={result.date}
      imageSrc={result.imageSrc}
    />
  </Animated>
))}
    </div>
  );
}

export default SearchBar;

