import React, { useState } from 'react';
import image from "./naruto.jpeg";
import "../App.css";

function Item() {
    const [count, setCount] = useState(1);

    function handleIncrement() {
      setCount(count + 1);
    }

    return (
        <div className="container">
            <img 
            src={image} 
            alt="logo style=" 
            style={{ maxWidth: '50px', maxHeight: '50px' }}
            />
            <h3 className="title"> Naruto Shippuden</h3>
            <div className="info-container">
                <div className="status-box">
                    <h3 classname="subtitle">Status:</h3>
                    <p>Complete</p>
                </div>
                <div className="days-box">
                    <h3 className="subtitle">Days Until:</h3>
                    <p>N/A</p>
                </div>
            </div>
        </div>
    );
}

export default Item