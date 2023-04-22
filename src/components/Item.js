import React, { useState } from 'react';
import image from "./naruto.jpeg";
import "../App.css";

function Item(props) {

    return (
        <div className="container">
            <img 
            src={props.imageSrc} 
            alt="logo" 
            style={{ maxWidth: '75px', maxHeight: '75px' }}
            />
            <h4 className="title">{props.title}</h4>
            <div className="info-container">
                <div className="status-box">
                    <h4 className="subtitle">Status:</h4>
                    <h5 style={{ color:'green' }}>{props.status}</h5>
                </div>
                <div className="days-box">
                    <h4 className="subtitle">Days Until:</h4>
                    <h5 style={{ color:'red' }}>{props.date}</h5>
                </div>
            </div>
        </div>
    );
}

export default Item