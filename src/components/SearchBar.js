import React, { useState } from "react";
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
  const [animeList, setAnimeList] = useState([]);
  const { results, setResults } = props;

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  async function handleSearchClick() {
      try {
        const url = new URL('https://anime-db.p.rapidapi.com/anime');
        url.search = new URLSearchParams({
          page: '1',
          size: '10',
          search: searchText
        }).toString();
    
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
          }
        });
        const data = await response.json();
        const firstAnime = data.data[0];
        console.log(firstAnime);
        setAnimeList(data.data);
      } catch (error) {
        console.error(error);
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
          borderRadius: '10px',
          padding: '10px',
          border: 'solid black',
          outline: 'none',
        }}
      />
      <button className="buttons" onClick={handleSearchClick}>Add To List</button>
      <ul>
      {animeList.map(anime => (
        <li key={anime.id}>{anime.title}</li>
        ))}
    </ul>
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

