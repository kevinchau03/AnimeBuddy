import {Animated} from "react-animated-css";
import React, { useState } from "react";
import './App.css';
import SearchBar from "./components/SearchBar.js";

function App() {
  const [results, setResults] = useState([
      {
        title: "Fullmetal Alchemist: Brotherhood",
        status: "Completed",
        date: "N/A",
        imageSrc: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
      }
  ]);

  return (
    <div className="App">
      <Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={true}>
        <h2 style={{ fontSize: '28px' }}>Welcome Back, Kevin Chau 👋</h2>
      </Animated>
      <SearchBar results={results} setResults={setResults} />
    </div>
  );
}

export default App;
