import React from "react";
import machine from "../src/image/machine.webp";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={machine} alt="Machine" className="machine-image" />
      </div>
      <div className="text-container">
        <h1>Welcome to SK Enterprises</h1>
        <p>
          We provide top-notch repair and installation services, including AC repair, washing machine repair, and more.
          Our expert team ensures quality service and customer satisfaction.
        </p>
        <button className="home-button">Learn More</button>
      </div>
    </div>
  );
}

export default Home;
