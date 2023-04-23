import React from 'react';
import {Animated} from "react-animated-css";
import './App.css';
import SearchBar from "./components/SearchBar.js";
import Item from "./components/Item.js";

function App() {
  return (
    <div className="App">
      <Animated animationIn='bounceInLeft' animationOut='fadeOut' isVisible={true}>
        <h2>Welcome Back, Kevin Chau 👋</h2>
      </Animated>
      <SearchBar/>
    </div>
  );
}

export default App;
