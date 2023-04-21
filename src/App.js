import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar.js";
import Item from "./components/Item.js";

function App() {
  return (
    <div className="App">
      <h1>Welcome Back, Kevin Chau</h1>
      <SearchBar/>
      <h2>Your List.</h2>
      <Item />
    </div>
  );
}

export default App;
