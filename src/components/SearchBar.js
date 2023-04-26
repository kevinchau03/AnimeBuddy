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
  const [searchText, setSearchText] = useState("");
  const { results, setResults } = props;

  function handleInputChange(event) {
    const value = event.target.value;
    setSearchText(value);
  }

  async function handleSearchClick() {
    try {
      const response = await axios.get(`https://myanimelist.p.rapidapi.com/anime/search/${searchText}`, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
      });
      let animeID = response.data[0].myanimelist_id;
      const search = await axios.get(`https://myanimelist.p.rapidapi.com/anime/${animeID}`, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
      });
      
      let animeDay = search.data.information.broadcast;
      let inputDay = dayNames.indexOf(animeDay.split(" ")[0]);
      let daysUntilInputDay = (inputDay - date + 7) % 7;
      
      let currstatus = ' ';
      let currdate = ' ';
      if (search.data.information.status === 'Currently Airing') {
        currstatus = 'Airing'
        currdate = daysUntilInputDay;
      } else {
        currstatus = 'Completed'
        currdate = 'N/A'
      }
        const newResult = {
        title: search.data.title_ov,
        status: currstatus,
        date: currdate,
        imageSrc: search.data.picture_url
      };
      setResults([...results, newResult]);
      setSearchText("");
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className="search-bar">
      <Animated animationIn='bounceInLeft' animationOut='bounceInRight' isVisible={true}>
        <h3>Enter Your Desired Anime/Movie</h3>
      </Animated>
      <input
        type="text"
        placeholder="Ex. Naruto Shippuden"
        value={searchText}
        onChange={handleInputChange}
        style={{
          width: '380px',
          borderRadius: '20px',
          padding: '10px',
          border: 'solid black',
          outline: 'none',
        }}
      />
      <button className="buttons" onClick={handleSearchClick}>Add To List</button>
      <h3>Your Awesome Anime List:</h3>
      {results.map((result, index) => (
      <Animated
          key={index}
          animationIn={"zoomInDown"}
        >
          <Item
            title={result.title}
            status={result.status}
            date={result.date}
            imageSrc={result.imageSrc}
            deleteItem={() => {
              const newResults = [...results];
              newResults.splice(index, 1);
              setResults(newResults);
            }}
          />
      </Animated>
))}
    </div>
  );
}

export default SearchBar;

