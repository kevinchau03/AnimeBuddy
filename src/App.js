import {Animated} from "react-animated-css";
import React, { useState } from "react";
import './App.css';
import SearchBar from "./components/SearchBar.js";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={true}>
        <h2>Welcome Back, Kevin Chau 👋</h2>
      </Animated>
      <SearchBar results={results} setResults={setResults} />
    </div>
  );
}

export default App;
