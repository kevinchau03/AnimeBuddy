import React, { useState, useEffect } from "react";
import "../App.css";
import {Animated} from 'react-animated-css';
import axios from "axios";
import Item from "./Item.js";

const apiKey = process.env.REACT_APP_API_KEY;

function SearchBar(props) {
  let newDate = new Date()
  let date = newDate.getDay();    
  const dayNames = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"];
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
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
      });
      let animeDay = response.data.information.broadcast;
      let inputDay = dayNames.indexOf(animeDay.split(" ")[0]);
      let daysUntilInputDay = (inputDay - date + 7) % 7;

      let currstatus = ' ';
      let currdate = ' ';
      if (response.data.information.status === 'Currently Airing') {
        currstatus = 'Airing'
        currdate = daysUntilInputDay;
      } else {
        currstatus = 'Completed'
        currdate = 'N/A'
      }
      console.log(response.data)
      const newResult = {
        title: response.data.title_ov,
        status: currstatus,
        date: currdate,
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

