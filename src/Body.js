import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import './App.css';

  export default function Body() {
    const slideImages = [
        "images/image0.jpg",
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg"
      ];
          
      const properties = {
          duration: 5000,
          transitionDuration: 500,
          infinite: true,
          indicators: true,
          arrows: true,
          onChange: (oldIndex, newIndex) => {
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
          }
        }
    return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div className="image" style={{ backgroundImage: `url(${slideImages[0]})`} }>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[4]})` }}>
              </div>
            </div>
          </Slide>
        </div>
      );
  }
  