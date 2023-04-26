import {Animated} from "react-animated-css";
import React, { useState } from "react";
import './App.css';
import SearchBar from "./components/SearchBar.js";

function App() {
  const [results, setResults] = useState([
      {
        title: "My Default Anime",
        status: "Completed",
        date: "N/A",
        imageSrc: "https://www.looper.com/img/gallery/why-toad-from-the-super-mario-bros-movie-sounds-so-familiar/l-intro-1665105469.jpg"
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
