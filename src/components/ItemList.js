import React, { useState } from 'react';
import "../App.css";
import Item from './Item';

function ItemList() {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Add Item</button>
      {Array.from({ length: count }).map((_, index) => (
        <Item key={index} />
      ))}
    </div>
  );
}

export default ItemList;